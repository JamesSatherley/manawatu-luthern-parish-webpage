import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary p-5 text-background flex flex-col justify-center items-center">
      <span className="text-base">
        &copy; Copyright Manawatu Lutheran Parish {new Date().getFullYear}
      </span>
    </div>
  );
};

export default Footer;
