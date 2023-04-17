import bike from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Images/Icons/publish.svg";
import "./Upload.scss";

function Upload() {
  return (
    <>
      <section className="upload">
        <h1 className="upload__heading page-header">Upload Video</h1>
        <div className="upload__container">
          <div className="upload__thumbnail">
            <h2 className="upload__thumbnail--heading">video thumbnail</h2>
            <img className="upload__thumbnail--image" src={bike}></img>
          </div>
          <div>
            <div className="upload__input">
              <p className="upload__input--heading">TITLE YOUR VIDEO</p>

              <input
                className="upload__input--title"
                placeholder="Add a title to your video"
                type="text"
              ></input>
            </div>
            <div className="upload__description">
              <p className="upload__description--heading">
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
          <button className="upload__button">
            <img className="upload__button--publish" src={publish} />
            <p className="upload__button--text ">PUBLISH</p>
          </button>
          <a className="upload__cancel" href="#">
            CANCEL
          </a>
        </div>
      </section>
    </>
  );
}

export default Upload;
