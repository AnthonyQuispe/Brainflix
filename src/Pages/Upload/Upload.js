import bikeImage from "../../assets/Images/Upload-video-preview.jpg";
import publishImage from "../../assets/Images/Icons/publish.svg";
import "./Upload.scss";

function Upload() {
  return (
    <>
      <section className="upload">
        <h1 className="upload__title page-header">Upload Video</h1>
        <div className="upload__video">
          <h2 className="upload__video--title subheader">VIDEO THUMBNAIL</h2>
          <img className="upload__video--img" src={bikeImage} />
        </div>
        <div className="upload__input-title">
          <p className="upload__input-title--subheading subheader">
            TITLE YOUR VIDEO
          </p>
          <input
            className="upload__input-title--text"
            placeholder="Add a title to your video"
            type="text"
          />
        </div>
        <div className="upload__desc">
          <p className="upload__desc--title subheader">
            ADD A VIDEO DESCRIPTION
          </p>
          <textarea
            className="upload__desc--text"
            name="Description"
            id="Description"
            placeholder="Add a description to your video"
          />
        </div>
        <div className="upload__btn--container">
          <button className="upload__btn">
            <img className="upload__btn--img" src={publishImage} />
            <p className="upload__btn--text labelsbuttons ">Publish</p>
          </button>
        </div>

        <a className="upload__link" href="#">
          CANCEL
        </a>
      </section>
    </>
  );
}

export default Upload;
