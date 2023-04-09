import Video from "../../data/video-details.json";
import "./Hero.scss";
import Details from "../HeroDetails/HeroDetails";
import React, { useState, useEffect } from "react";
import CommentList from "../Comments/Comments";

function Videos() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);

  useEffect(() => {
    setCurrentVideo(Video[0]);
    setSideVideos(Video.slice(1));
  }, []);

  const handleVideoSelect = (video) => {
    if (currentVideo !== video) {
      setSideVideos((prevVideos) => {
        const filteredVideos = prevVideos.filter(
          (v) => v.id !== currentVideo?.id
        );
        return [...filteredVideos, currentVideo].filter(
          (v) => v.id !== video.id
        );
      });
      setCurrentVideo(video);
    }
  };

  return (
    <div className="hero">
      {currentVideo && (
        <div className="hero__video--container">
          <video
            className="hero__video"
            src={currentVideo.videoUrl}
            poster={currentVideo.image}
            controls
          />

          <Details selectedVideo={currentVideo} />
        </div>
      )}
      <CommentList
        videoId={currentVideo?.id}
        comments={Video[currentVideo?.id]?.comments || []}
      />

      <ul className="hero__videos--lists">
        {sideVideos.map((video) => (
          <li key={video.id}>
            <div
              className="hero__video-item"
              onClick={() => handleVideoSelect(video)}
            >
              <img
                className="hero__video--image"
                src={video.image}
                alt={video.title}
                poster={video.image}
              />
              <h3 className="hero__video--heading">{video.title}</h3>
              <p className="hero__video--info">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videos;
