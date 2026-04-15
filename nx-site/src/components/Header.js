import { useState } from "react";
import logo from "../media/logonx.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setOpen(false);
  };

  return (
    <header className="header">
      {/* LOGO */}
      <img src={logo} alt="logo" className="logo" />

      {/* MENU DESKTOP */}
      <nav className="nav">
        <p onClick={() => scrollTo("hero")}>Home</p>
        <p onClick={() => scrollTo("companies")}>Empresas</p>
        <p onClick={() => scrollTo("info")}>Evento</p>
        <p onClick={() => scrollTo("form")}>Inscrição</p>
      </nav>

      {/* HAMBURGUER */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="mobile-menu">
          <p onClick={() => scrollTo("hero")}>Home</p>
          <p onClick={() => scrollTo("companies")}>Empresas</p>
          <p onClick={() => scrollTo("info")}>Evento</p>
          <p onClick={() => scrollTo("form")}>Inscrição</p>
        </div>
      )}
    </header>
  );
}