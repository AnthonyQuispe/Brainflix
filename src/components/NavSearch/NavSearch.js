import avatar from "../../assets/Images/Mohan-muruge.jpg";
import search from "../../assets/Images/Icons/search.svg";
import "./NavSearch.scss";

function Nav() {
  return (
    <div className="nav__container">
      <div className="nav__search">
        <img className="nav__search--img" src={search} alt="search" />
        <input
          className="nav__search--input"
          placeholder="Search"
          type="text"
        />
      </div>
      <img className="nav__avatar" src={avatar} alt="avatar" />
    </div>
  );
}

export default Nav;
