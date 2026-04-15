export default function Hero() {
    const handleScroll = () => {
      const el = document.getElementById("info");
      el?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <section className="hero">
        <div className="overlay">
          <h1>NETWORKING EXPERIENCE</h1>
          <p>UNIVERSITÁRIOS MAIS CONECTADOS</p>
          <button onClick={handleScroll}>SAIBA MAIS</button>
        </div>
      </section>
    );
  }