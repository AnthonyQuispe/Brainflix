import logo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import "./Header.scss";
import Nav from "../NavSearch/NavSearch";
import NavButton from "../NavButton/NavButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav-link" to="/">
          {" "}
          <img className="logo" src={logo} alt="Brainflix" />
        </Link>

        <Nav />
        <Link to="/upload">
          {" "}
          <NavButton />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
