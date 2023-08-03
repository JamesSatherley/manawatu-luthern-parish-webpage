import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backgroundImage1 from "./assets/1.JPG";
import backgroundImage2 from "./assets/2.JPG";
import backgroundImage3 from "./assets/3.JPG";
import backgroundImage4 from "./assets/4.JPG";
import backgroundImage5 from "./assets/5.JPG";
import backgroundImage6 from "./assets/6.JPG";

function App() {
  const imageUrls = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrl = `url(${imageUrls[currentImageIndex]})`;
  const intervalRef = useRef(null);

  // Preload images function
  const preloadImages = () => {
    imageUrls.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    // Preload images when the component mounts
    preloadImages();

    // Start a timer to change the background image every 5 seconds
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => {
      // Clear the timer when the component unmounts
      clearInterval(intervalRef.current);
    };
  }, [imageUrls.length]);

  return (
    <div
      className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-background-secondary"
      style={{ scrollbarColor: "var(--primary) var(--secondary)" }}
    >
      <div
        className={`h-screen bg-no-repeat bg-center bg-cover transition delay-700 ${
          currentImageIndex !== 0 ? "fade-in-out" : ""
        }`}
        style={{ backgroundImage: imageUrl, backgroundColor: "black" }}
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
