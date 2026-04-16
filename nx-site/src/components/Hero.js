import bg from "../media/arquivos/imagehero.png";

export default function Hero() {
  const goToForm = () => {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section
      className="hero"
      id="hero"
      style={{
        background: `url(${bg}) center/cover no-repeat`
      }}
    >
      {/* OVERLAY ESCURO */}
      <div className="overlay" />

      {/* CONTEÚDO */}
      <div className="hero-content">
        <h1>NETWORKING EXPERIENCE</h1>
        <p>UNIVERSITÁRIOS MAIS CONECTADOS</p>

        <button onClick={goToForm}>
          INSCREVER-SE
        </button>
      </div>
    </section>
  );
}