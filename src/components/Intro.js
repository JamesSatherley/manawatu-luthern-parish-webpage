import React, { useState, useEffect } from "react";

const Intro = () => {
  const stringsArray = [
    "Grace be to him",
    "He is my cornerstone",
    "By his amazing grace",
    "Praise be to him",
  ];

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let intervalId;

    if (typing) {
      if (currentIndex < stringsArray[currentStringIndex]?.length) {
        intervalId = setTimeout(() => {
          setCurrentString(
            (prevString) =>
              prevString + stringsArray[currentStringIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 200);
      } else {
        intervalId = setTimeout(() => {
          setTyping(false);
        }, 4000);
      }
    } else {
      if (currentIndex > 0) {
        intervalId = setTimeout(() => {
          setCurrentString((prevString) =>
            prevString.slice(0, prevString.length - 1)
          );
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, 100);
      } else {
        intervalId = setTimeout(() => {
          setTyping(true);
          setCurrentString("");
          setCurrentIndex(0);
          setCurrentStringIndex(
            (prevIndex) => (prevIndex + 1) % stringsArray.length
          );
        }, 500);
      }
    }

    return () => clearTimeout(intervalId);
  }, [currentStringIndex, currentIndex, stringsArray, typing]);

  return (
    <div className="py-[28.6rem] px-10 m-20 text-white flex justify-center items-center font-bold flex-col">
      <span className="text-8xl">Manawatu Lutheran Parish</span>
      <span className="text-5xl h-20 p-10">{currentString}</span>
    </div>
  );
};

export default Intro;
