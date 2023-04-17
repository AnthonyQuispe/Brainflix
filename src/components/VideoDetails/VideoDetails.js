import React from "react";
import { useParams } from "react-router-dom";
import likeImage from "../../assets/Images/Icons/likes.svg";
import viewImage from "../../assets/Images/Icons/views.svg";
import "./VideoDetail.scss";

function VideoDetails({ selectedVideo }) {
  const { id } = useParams(); // Access the video ID from URL parameter
  return (
    <div>
      {selectedVideo && (
        <div className="video-details">
          <h2 className="video-details__title page-header">
            {selectedVideo.title}
          </h2>

          <div className="video-details__container">
            <div className="video-details__channel">
              <p className="video-details__channel-name subheader">
                By {selectedVideo.channel}
              </p>
              <p className="video-details__timestamp">
                {new Date(selectedVideo.timestamp).toLocaleDateString(
                  undefined,
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )}
              </p>
            </div>
            <div className="video-details__icons">
              <p className="video-details__icon--view">
                <img
                  className="video-details__icon--image"
                  src={viewImage}
                  alt="viewImage"
                />
                {selectedVideo.views}
              </p>
              <p className="video-details__icon--like">
                <img
                  className="video-details__icon--image"
                  src={likeImage}
                  alt="likeImage"
                />
                {selectedVideo.likes}
              </p>
            </div>
          </div>
          <p className="video-details__description body-copy">
            {selectedVideo.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoDetails;
