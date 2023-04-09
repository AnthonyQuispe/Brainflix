import React from "react";
import Videos from "../../data/video-details.json";
import likeImage from "../../assets/Images/Icons/likes.svg";
import viewImage from "../../assets/Images/Icons/views.svg";

function VideoDetails({ selectedVideo }) {
  return (
    <div>
      {selectedVideo && (
        <div>
          <h2>{selectedVideo.title}</h2>
          <p>
            <img src={viewImage} alt="viewImage" />
            {selectedVideo.views} views •
            <img src={likeImage} alt="likeImage" />
            {selectedVideo.likes} likes •{" "}
            {new Date(selectedVideo.timestamp).toLocaleDateString()}
          </p>
          <p> {selectedVideo.channel}</p>
          <p>{selectedVideo.description}</p>
        </div>
      )}
    </div>
  );
}

export default VideoDetails;
