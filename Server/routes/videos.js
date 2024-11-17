const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

function readVideoFile() {
  const videosList = fs.readFileSync("./data/videos.json");
  const parsedData = JSON.parse(videosList);
  return parsedData;
}

// Route to fetch all videos
router.get("/", (req, res) => {
  const videos = readVideoFile();
  res.json(videos);
});

// Route to fetch a specific video by ID
router.get("/:id", (req, res) => {
  const videoId = req.params.id;
  const videos = readVideoFile();
  const video = videos.find((v) => v.id === videoId);

  if (video) {
    res.json(video);
  } else {
    res.status(404).send("Video not found");
  }
});

// Route to fetch comments of a specific video by ID
router.get("/:id/comments", (req, res) => {
  const videoId = req.params.id;
  const videos = readVideoFile();
  const video = videos.find((v) => v.id === videoId);

  if (video) {
    res.json(video.comments); // Return the comments of the specific video
  } else {
    res.status(404).send("Video not found");
  }
});

// Route to fetch next videos (return all remaining videos after the current one)
router.get("/:id/next-videos", (req, res) => {
  const videoId = req.params.id;
  const videos = readVideoFile();
  const videoIndex = videos.findIndex((v) => v.id === videoId);

  if (videoIndex === -1) {
    return res.status(404).send("Video not found");
  }

  // Fetch all the remaining videos (skip current video)
  const nextVideos = videos.slice(videoIndex + 1); // No limit, return all remaining videos
  res.json(nextVideos);
});

// Route to add a comment to a specific video
router.post("/:id/comments", (req, res) => {
  const videoId = req.params.id;
  const { name, comment, timestamp } = req.body;

  if (!name || !comment) {
    return res.status(400).send("Name and comment are required");
  }

  const videos = readVideoFile();
  const video = videos.find((v) => v.id === videoId);

  if (video) {
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      timestamp,
    };

    // Add the comment to the video
    video.comments.push(newComment);

    // Save the updated video list back to the file
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));

    // Respond with the newly added comment
    res.status(201).json(newComment);
  } else {
    res.status(404).send("Video not found");
  }
});

// POST endpoint to add a video
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).send("Title and Description are required");
    return;
  }

  const now = new Date();
  const timestamp = now.toISOString();

  const newVideo = {
    id: uuidv4(),
    title,
    description,
    channel: "Lorem Ipsum",
    views: "10",
    likes: "20",
    duration: "4:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp,
    comments: [
      {
        id: uuidv4(),
        name: "Lorem Ipsum",
        likes: "20",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp,
      },
    ],
  };

  // Handle image upload
  if (req.files && req.files.image) {
    const imageFile = req.files.image;
    const imagePath = `http://localhost:8080/public/images/${newVideo.id}`;
    imageFile.mv(
      path.join(__dirname, `../public/images/${newVideo.id}`),
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send("Error writing image file");
          return;
        }
      }
    );
    newVideo.image = imagePath;
  }

  // Add the new video to the video array
  const videos = readVideoFile();
  videos.push(newVideo);
  fs.writeFileSync("./data/videos.json", JSON.stringify(videos));

  // Respond with the new video
  res.status(201).json(newVideo);
});

module.exports = router;
