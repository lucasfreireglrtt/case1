import logo from "../media/logonxbranco.png";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* LOGO + NOME */}
        <div className="footer-col">
          <img src={logo} alt="logo" className="footer-logo" />
          <p>Networking Experience</p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <p onClick={() => scrollTo("hero")}>Home</p>
          <p onClick={() => scrollTo("companies")}>Empresas</p>
          <p onClick={() => scrollTo("info")}>Evento</p>
          <p onClick={() => scrollTo("form")}>Inscrição</p>
        </div>

        {/* CONTATO */}
        <div className="footer-col">
          <h4>Contato</h4>
          <p>
            <FaEnvelope /> networking.experience@ejemmackenzie.com.br
          </p>
          <p>Rua da Consolação, 930</p>
        </div>

      </div>

      {/* REDES */}
      <div className="footer-social">
        <FaInstagram />
        <FaLinkedin />
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 Networking Experience. Todos os direitos reservados.
      </div>
    </footer>
  );
}