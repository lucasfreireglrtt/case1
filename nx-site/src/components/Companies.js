import { useRef } from "react";

import google from "../media/Google_2015_logo.svg.png";
import nasa from "../media/NASA_logo.svg.png";
import adobe from "../media/Adobe-Logo-2020-present.png";
import mitsubishi from "../media/Mitsubishi-logo.png";

const empresas = [
  { nome: "Google", logo: google },
  { nome: "NASA", logo: nasa },
  { nome: "Adobe", logo: adobe },
  { nome: "Mitsubishi", logo: mitsubishi }
];

export default function Companies() {
    const containerRef = useRef();
  
    const scroll = (direction) => {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth / 4;
  
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth"
      });
    };
  
    return (
      <section className="companies-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          ◀
        </button>
  
        <div className="companies" ref={containerRef}>
          {empresas.map((e, i) => (
            <div key={i} className="company-card">
              <img src={e.logo} alt={e.nome} />
            </div>
          ))}
        </div>
  
        <button className="arrow right" onClick={() => scroll("right")}>
          ▶
        </button>
      </section>
    );
  }