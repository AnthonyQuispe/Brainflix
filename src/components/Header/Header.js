import logo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import "./Header.sass";
import Nav from "../NavSearch/NavSearch";
import NavButton from "../NavButton/NavButton";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={logo} alt="Brainflix" />
        <Nav />
        <NavButton />
      </nav>
    </header>
  );
}

export default Header;
