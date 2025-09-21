import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  // trava o scroll quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#hero" className="site-header__brand" onClick={closeMenu}>
          <img src={logo} alt="Logo INOVE" className="site-header__logo" />
        </a>

        <button
          className={`site-header__toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Abrir/fechar menu</span>
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${open ? "is-open" : ""}`}
        >
          <ul className="site-nav__list" onClick={closeMenu}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#portfolio">Obras</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
