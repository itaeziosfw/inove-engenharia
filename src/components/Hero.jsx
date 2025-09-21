import React from "react";
import "./Hero.css";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src={logo} alt="Logo Inove" className="hero-logo" />
        <h1>INOVE Soluções e Engenharia</h1>
        <p>Sua casa e empresa mais colorida com qualidade e confiança.</p>
        <a href="#contact" className="btn">Solicitar Orçamento</a>
      </div>
    </section>
  );
};

export default Hero;
