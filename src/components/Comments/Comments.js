import React, { useState, useEffect } from "react";
import axios from "axios";
import userAvatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Comments.scss";
import addComment from "../../assets/Images/Icons/add_comment.svg";

const URL = "http://localhost:8080/videos";

function CommentList({ videoId }) {
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((response) => response.data)
      .then((videos) => {
        // Fetch details for each video
        const videoPromises = videos.map((video) => {
          return axios
            .get(`${URL}/${video.id}`)
            .then((response) => response.data);
        });

        // Wait for all requests to complete
        return Promise.all(videoPromises);
      })
      .then((videoDetails) => {
        setVideoDetails(videoDetails);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
      });
  }, []);

  const currentVideo = videoDetails.find((video) => video.id === videoId);

  const videoComments = currentVideo ? currentVideo.comments : [];

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    videoDetails.length > 0 && (
      <div className="comments">
        <h4 className="comments__count ">{videoComments.length} Comments</h4>
        <form className="comments__form">
          <div className="comments__form-container">
            <img className="comments__avatar" src={userAvatar} alt="Avatar" />
            <div className="comments__textarea-container">
              <label className="comments__textarea-title ">
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
                <img
                  className="comments__button--img"
                  src={addComment}
                  alt="Comment-Button"
                />
                <p className="comments__button--text ">Comment </p>
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
                    <p className="comments__user">{comment.name}</p>
                    <p className="comments__timestamp">
                      {formatDate(comment.timestamp)}
                    </p>
                  </div>
                  <p className="comments__text">{comment.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default CommentList;
