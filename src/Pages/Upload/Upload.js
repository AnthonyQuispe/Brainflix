import bikeImage from "../../assets/Images/Upload-video-preview.jpg";
import publishImage from "../../assets/Images/Icons/publish.svg";
import "./Upload.scss";

function Upload() {
  return (
    <>
      <section className="upload">
        <h1 className="upload-title page-header">Upload Video</h1>
        <div className="upload-container">
          <div className="upload-thumbnail">
            <h2 className="upload-thumbnail-title">video thumbnail</h2>
            <img className="upload-img" src={bikeImage} alt="Thumbnail" />
          </div>
          <div>
            <div className="upload-input">
              <p className="upload-input-title">Title Your Video</p>

              <input
                className="upload-input-text"
                placeholder="Add a title to your video"
                type="text"
              />
            </div>
            <div className="upload-description">
              <p className="upload-description-title">
                Add a Video Description
              </p>

              <textarea
                className="upload-description-text"
                name="Description"
                id="Description"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <div className="upload-buttons-container">
          <button className="upload-button">
            <img
              className="upload-button-img"
              src={publishImage}
              alt="Publish"
            />
            <p className="upload-button-text">Publish</p>
          </button>
          <a className="upload-link" href="#">
            Cancel
          </a>
        </div>
      </section>
    </>
  );
}

export default Upload;
