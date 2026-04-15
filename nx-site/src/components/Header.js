import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">NX</div>

      <div className="menu" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <div className="dropdown">
          <p onClick={() => document.getElementById("info").scrollIntoView()}>
            Evento
          </p>
          <p onClick={() => document.getElementById("form").scrollIntoView()}>
            Inscrição
          </p>
        </div>
      )}
    </header>
  );
}