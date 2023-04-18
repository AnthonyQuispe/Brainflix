import React, { useState } from "react";
import { Link } from "react-router-dom";
import bike from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Images/Icons/publish.svg";
import "./Upload.scss";

function Upload() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      window.location.href = "/";
    }, 3000);
  };

  const Notification = () => {
    return (
      <div className="upload__notification">
        <p>Your video has been uploaded successfully!</p>
      </div>
    );
  };

  return (
    <>
      <section className="upload">
        <h1 className="upload__heading page-header">Upload Video</h1>
        {isFormSubmitted && <Notification />}
        <form onSubmit={handleFormSubmit}>
          <div className="upload__container">
            <div className="upload__thumbnail">
              <h2 className="upload__thumbnail--heading subheader">
                video thumbnail
              </h2>
              <img className="upload__thumbnail--image" src={bike}></img>
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
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload__container--button">
            <button type="submit" className="upload__button">
              <img className="upload__button--publish" src={publish} />
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
