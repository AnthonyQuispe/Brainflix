import React from "react";
import userAvatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Comments.scss";
import videoDetails from "../../data/video-details.json";
import addComment from "../../assets/Images/Icons/add_comment.svg";

function CommentList({ videoId }) {
  const currentVideo = videoDetails.find((video) => video.id === videoId);

  const videoComments = currentVideo ? currentVideo.comments : [];

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="comments">
      <h4 className="comments__count subheader">
        {videoComments.length} Comments
      </h4>
      <form className="comments__form">
        <div className="comments__form-container">
          <img className="comments__avatar" src={userAvatar} alt="Avatar" />
          <div className="comments__textarea-container">
            <label className="comments__textarea-title subheader">
              JOIN THE CONVERSATION
              <textarea
                className="comments__textarea comments__input"
                name="comment"
                id="comment"
                cols="30"
                rows="4"
                placeholder="Add a new comment"
              ></textarea>
            </label>
            <button className="comments__button comments__input">
              <img className="comments__button--img" src={addComment} />
              <p className="comments__button--text labelsbuttons">Comment </p>
            </button>
          </div>
        </div>
      </form>
      <ul className="comments__list">
        {videoComments.map((comment, index) => (
          <li key={index} className="comments__item">
            <div className="comments__item-container">
              <img className="comments__avatars" alt="" />
              <div className="comments__content">
                <div className="comments__header">
                  <p className="comments__user subheader">{comment.name}</p>
                  <p className="comments__timestamp body-copy">
                    {formatDate(comment.timestamp)}
                  </p>
                </div>
                <p className="comments__text body-copy">{comment.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
