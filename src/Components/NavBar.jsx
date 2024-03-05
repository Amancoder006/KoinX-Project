import { useState } from "react";
import "./NavBar.css";
import Logo from "../assets/KoinXLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Crypto Taxes</a>
        </li>
        <li>
          <a href="#">Free Tools</a>
        </li>
        <li>
          <a href="#">Resource Center</a>
        </li>
        <li>
          <a href="#"  >Get Started</a>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
