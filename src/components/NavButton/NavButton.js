import upload from "../../assets/Images/Icons/upload.svg";

function NavButton() {
  return (
    <div className="nav__button--container">
      <button className="nav__button">
        <img className="nav__button--img" src={upload} />
        <p className="nav__button--text labelsbuttons">UPLOAD </p>
      </button>
    </div>
  );
}

export default NavButton;
