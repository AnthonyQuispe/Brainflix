import React, { useState } from "react";
import { Link } from "react-router-dom";
import bike from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Images/Icons/publish.svg";
import axios from "axios";
import "./Upload.scss";

function Upload() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    try {
      if (!title || !description) {
        throw new Error("Title and description are required");
      }

      // Create a new FormData object
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      // Make a POST request to the server with the form data
      await axios.post("http://localhost:8080/videos", formData);
      window.alert("Your video has been uploaded successfully!");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    } finally {
      setIsFormSubmitted(false);
    }
  };

  return (
    <>
      <section className="upload">
        <h1 className="upload__heading page-header">Upload Video</h1>
        {isFormSubmitted && (
          <div className="upload__notification">Your video is uploading...</div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="upload__container">
            <div className="upload__thumbnail">
              <h2 className="upload__thumbnail--heading subheader">
                video thumbnail
              </h2>
              <img
                className="upload__thumbnail--image"
                src={image ? URL.createObjectURL(image) : bike}
                alt="BikeImage"
              ></img>
              <input
                className="upload__thumbnail--"
                type="file"
                accept="image/*"
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
            <div>
              <div className="upload__input">
                <p className="upload__input--heading subheader">
                  TITLE YOUR VIDEO
                </p>
                <input
                  className="upload__input--title"
                  placeholder="Add a title to your video"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                ></input>
              </div>
              <div className="upload__description">
                <p className="upload__description--heading subheader">
                  ADD A VIDEO DESCRIPTION
                </p>
                <textarea
                  className="upload__description--textarea"
                  name="Description"
                  placeholder="Add a description to your video"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload__container--button">
            <button type="submit" className="upload__button">
              <img
                className="upload__button--publish"
                src={publish}
                alt="publishIcon"
              />
              <p className="upload__button--text ">PUBLISH</p>
            </button>
            <Link to="/" className="upload__cancel">
              CANCEL
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Upload;
