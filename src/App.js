import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backgroundImage from "./assets/drone.jpg";

function App() {
  const imageUrl = `url(${backgroundImage})`;

  return (
    <div
      className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-background-secondary"
      style={{ scrollbarColor: "var(--primary) var(--secondary)" }}
    >
      <div
        className="h-screen bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: imageUrl,
          backgroundColor: "black",
        }}
      >
        <Navbar />
        <Intro />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
