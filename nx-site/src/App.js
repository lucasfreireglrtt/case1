import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import InfoSection from "./components/InfoSection";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ScrollingBanner from "./components/scrollingbanner";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <ScrollingBanner />
      <Companies />
      <InfoSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;