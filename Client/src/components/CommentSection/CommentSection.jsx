import "./CommentSection.scss";
import React, { useState } from "react";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/images/icons/add_comment.svg";
import axios from "axios";

export default function CommentSection({
  videoId,
  videoComments,
  setVideoComments,
}) {
  const [newComment, setNewComment] = useState("");
  const URL = `http://localhost:8080/videos/${videoId}/comments`;

  // Handle form submission
  const onComment = (e) => {
    e.preventDefault();

    const commentData = {
      name: "Current User",
      comment: newComment,
      timestamp: Date.now(),
    };

    axios
      .post(URL, commentData)
      .then((response) => {
        // Update comments with the newly added comment
        setVideoComments((prevComments) => [response.data, ...prevComments]);
        setNewComment("");
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  // Function to render comments
  const renderComments = () =>
    videoComments.map((comment, index) => (
      <li key={index} className="comments__item">
        <div className="comments__item-container">
          <img className="comments__avatars" alt="" src={userAvatar} />
          <div className="comments__content">
            <div className="comments__header">
              <p className="comments__user">{comment.name}</p>
              <p className="comments__timestamp">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </div>
            <p className="comments__text">{comment.comment}</p>
          </div>
        </div>
      </li>
    ));

  return (
    <section className="comments">
      <form className="comments__form" onSubmit={onComment}>
        <div className="comments__form-container">
          <img className="comments__avatar" src={userAvatar} alt="Avatar" />
          <div className="comments__textarea-container">
            <label className="comments__textarea-title">
              JOIN THE CONVERSATION
              <textarea
                className="comments__textarea comments__input"
                name="comment"
                id="comment"
                cols="30"
                rows="4"
                placeholder="Add a new comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </label>
            <button className="comments__button comments__input" type="submit">
              <img
                className="comments__button--img"
                src={addComment}
                alt="Comment-Button"
              />
              <p className="comments__button--text">Comment</p>
            </button>
          </div>
        </div>
      </form>

      {/* Render Comments */}
      <ul className="comments__list">{renderComments()}</ul>
    </section>
  );
}
