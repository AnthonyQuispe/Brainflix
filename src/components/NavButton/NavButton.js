import upload from "../../assets/Images/Icons/upload.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./NavButton.scss";
function NavButton() {
  return (
    <div className="nav__button--container">
      <button className="nav__button">
        <img className="nav__button--img" src={upload} alt="nav button img" />
        <p className="nav__button--text">UPLOAD </p>
      </button>
      <img className="nav__button-avatar" src={avatar} alt="avatar" />
    </div>
  );
}

export default NavButton;
