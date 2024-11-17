import "./HomePage.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeroSection from "../../components/HeroSection/HeroSection";
import DescriptionsSection from "../../components/DescriptionsSection/DescriptionsSection";
import CommentSection from "../../components/CommentSection/CommentSection";
import NextVidsSection from "../../components/NextVidsSection/NextVidsSection";

export default function Homepage() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [comments, setComments] = useState([]);
  const [nextVideos, setNextVideos] = useState([]);
  const URL = "http://localhost:8080/videos";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";
        const videoResponse = await axios.get(`${URL}/${videoId}`);
        const nextVideosResponse = await axios.get(`${URL}`);
        const commentsResponse = await axios.get(`${URL}/${videoId}/comments`);

        setVideoData(videoResponse.data);
        setNextVideos(
          nextVideosResponse.data.filter((video) => video.id !== videoId)
        );
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!videoData) return <p>Loading...</p>;

  return (
    <>
      <HeroSection videoUrl={videoData.videoUrl} poster={videoData.image} />
      <div className="home-page__container">
        <div className="home-page__current-video">
          <DescriptionsSection
            title={videoData.title}
            channel={videoData.channel}
            timestamp={videoData.timestamp}
            views={videoData.views}
            likes={videoData.likes}
            description={videoData.description}
          />
          <CommentSection
            videoId={videoData.id}
            videoComments={comments}
            setVideoComments={setComments}
          />
        </div>
        <NextVidsSection
          videos={nextVideos} // Pass the fetched next videos array
          onVideoSelect={(id) => {
            // Fetch the selected video data
            axios
              .get(`${URL}/${id}`)
              .then((response) => setVideoData(response.data));
            // Update the comments for the selected video
            axios
              .get(`${URL}/${id}/comments`)
              .then((response) => setComments(response.data));
          }}
        />
      </div>
    </>
  );
}
