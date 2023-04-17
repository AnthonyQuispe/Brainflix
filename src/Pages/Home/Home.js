import axios from "axios";
import "./Home.scss";
import Details from "../../components/VideoDetails/VideoDetails";
import CommentList from "../../components/Comments/Comments";
import React, { useState, useEffect } from "react";

const apiKey = "6ef66323-5a74-40d5-8fa6-4ac16b1e9824";
const URL = "https://project-2-api.herokuapp.com";

function Videos() {
  const [currentVideo, setCurrentVideo] = useState();
  const [sideVideos, setSideVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/videos/?api_key=${apiKey}`)
      .then((response) => response.data)
      .then((videos) => {
        setCurrentVideo(videos[0]);
        setSideVideos(videos.slice(1));

        // Fetch details for each video
        const videoPromises = videos.map((video) => {
          return axios
            .get(`${URL}/videos/${video.id}?api_key=${apiKey}`)
            .then((response) => response.data);
        });

        Promise.all(videoPromises)
          .then((videoDetails) => {
            setVideoDetails(videoDetails);
          })
          .catch((error) => {
            console.error("Error fetching video details:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  useEffect(() => {
    if (videoDetails && videoDetails.length > 0) {
      const selectedVideo = videoDetails.find((v) => v.id === currentVideo?.id);
      setCurrentVideo(selectedVideo);
    }
  }, [videoDetails]);

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
      // Find the corresponding video object in videoDetails state
      const selectedVideo = videoDetails.find((v) => v.id === video.id);
      setCurrentVideo(selectedVideo);

      // Update video URL and poster
      const videoElement = document.querySelector(".hero__video");
      videoElement.src = selectedVideo.videoUrl;
      videoElement.poster = selectedVideo.image;

      // Update URL in browser
      window.history.pushState(null, null, `/videos/${selectedVideo.id}`);
    }
  };
  console.log(currentVideo);
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