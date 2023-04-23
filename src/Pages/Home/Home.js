import axios from "axios";
import "./Home.scss";
import Details from "../../components/VideoDetails/VideoDetails";
import CommentList from "../../components/Comments/Comments";
import React, { useState, useEffect, useCallback } from "react";

const URL = "http://localhost:8080/videos";

function Videos() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  const fetchVideosAndDetails = useCallback(() => {
    axios
      .get(`${URL}?_embed=comments`)
      .then((response) => {
        const videos = response.data;
        setCurrentVideo(videos[0]);
        setSideVideos(videos.slice(1));

        const details = videos.map((video) => {
          return { id: video.id, ...video };
        });
        setVideoDetails(details);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  useEffect(() => {
    fetchVideosAndDetails();
  }, [fetchVideosAndDetails]);

  const handleVideoSelect = useCallback(
    (video) => {
      if (currentVideo !== video) {
        setSideVideos((prevVideos) => {
          const filteredVideos = prevVideos.filter(
            (v) => v.id !== currentVideo?.id
          );
          return [...filteredVideos, currentVideo].filter(
            (v) => v.id !== video.id
          );
        });

        const selectedVideo = videoDetails.find((v) => v.id === video.id);
        setCurrentVideo(selectedVideo);

        // Update video URL and poster
        const videoElement = document.querySelector(".hero__video");
        videoElement.src = video.videoUrl;
        videoElement.poster = video.image;

        // Update URL in browser
        window.history.pushState(null, null, `/videos/${video.id}`);
      }
    },
    [currentVideo, videoDetails]
  );

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
                comments={currentVideo?.comments || []}
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
