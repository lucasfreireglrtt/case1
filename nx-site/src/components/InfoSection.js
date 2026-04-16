import bg from "../media/evento.jpeg";
import logo from "../media/logonx.png";

export default function InfoSection() {
  const goToForm = () => {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section
      className="info"
      id="info"
      style={{
        background: `url(${bg}) center/cover no-repeat`
      }}
    >
      {/* overlay escuro */}
      <div className="info-overlay" />

      {/* BOX */}
      <div className="info-box">
        {/* LOGO */}
        <div className="info-left">
          <img src={logo} alt="logo" />
        </div>

        {/* TEXTO */}
        <div className="info-right">
          <p>
            O <strong>Networking Experience</strong> conecta empresas líderes
            do mercado com universitários, proporcionando networking valioso
            e experiências inesquecíveis.
          </p>

          <p>
            Eventos como a <strong>Feira de Recrutamento</strong> e a{" "}
            <strong>Semana da Escola de Engenharia</strong> fazem parte dessa jornada.
          </p>

          <button onClick={goToForm}>INSCREVER-SE</button>
        </div>
      </div>
    </section>
  );
}