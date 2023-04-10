import React, { useState, useEffect } from "react";
import Video from "../../data/video-details.json";
import "./Hero.scss";
import Details from "../HeroDetails/HeroDetails";
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
        <div className="hero__video-container">
          <video
            className="hero__video"
            src={currentVideo.videoUrl}
            poster={currentVideo.image}
            controls
          />
          <div className="video-container">
            <div className="video-detail">
              <Details selectedVideo={currentVideo} />
              <CommentList
                videoId={currentVideo?.id}
                comments={Video[currentVideo?.id]?.comments || []}
              />
            </div>
            <div className="next-video">
              <h4 className="next-video__heading subheader">NEXT VIDEOS</h4>
              <ul className="next-video__list">
                {sideVideos.map((video) => (
                  <li key={video.id} className="next-video__item">
                    <div
                      className="next-video__item-container"
                      onClick={() => handleVideoSelect(video)}
                    >
                      <div className="next-video__image-container">
                        <img
                          className="next-video__image"
                          src={video.image}
                          alt={video.title}
                          poster={video.image}
                        />
                      </div>

                      <div className="next-video__content">
                        <h3 className="next-video__title subheader">
                          {video.title}
                        </h3>
                        <p className="next-video__channel body-copy">
                          {video.channel}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;
