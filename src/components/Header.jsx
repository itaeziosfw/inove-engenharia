import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo INOVE" className="logo" />
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#portfolio">Obras</a></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
