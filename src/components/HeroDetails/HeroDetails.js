import React from "react";
import likeImage from "../../assets/Images/Icons/likes.svg";
import viewImage from "../../assets/Images/Icons/views.svg";
import "./HeroDetail.scss";

function VideoDetails({ selectedVideo }) {
  return (
    <div>
      {selectedVideo && (
        <div className="video-details">
          <h2 className="video-details__title page-header">
            {selectedVideo.title}
          </h2>
          <div className="video-details__container">
            <div className="video-details__channel">
              <p className="video-details__channel-name">
                By {selectedVideo.channel}
              </p>
              <p className="video-details__timestamp">
                {new Date(selectedVideo.timestamp).toLocaleDateString()}
              </p>
            </div>
            <div className="video-details__icons">
              <p className="video-details__icon video-details__icon--view">
                <img src={viewImage} alt="viewImage" />
                {selectedVideo.views}
              </p>
              <p className="video-details__icon video-details__icon--like">
                <img src={likeImage} alt="likeImage" />
                {selectedVideo.likes}
              </p>
            </div>
          </div>

          <p className="video-details__description">
            {selectedVideo.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoDetails;
