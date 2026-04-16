import banner from "../media/banner.png"; // sua imagem

export default function ScrollingBanner() {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <img src={banner} alt="banner" />
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}