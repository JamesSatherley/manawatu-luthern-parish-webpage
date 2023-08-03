import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-background p-10 h-2/5 text-text flex flex-col justify-center items-center"
    >
      <span className="text-5xl pb-28">Contact Us</span>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <span className="text-3xl text-center pb-10">Email</span>
          <span className="text-xl w-[32rem] text-center ">
            <a href="mailto:manawatulutheran@inspire.net.nz">
              manawatulutheran@inspire.net.nz
            </a>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl text-center pb-10">Call</span>
          <span className="text-xl w-[32rem] text-center ">
            <a href="tel:063570030">06 357 0030</a>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl text-center pb-10">Office</span>
          <span className="text-xl w-[32rem] text-center ">
            9am - 2pm, Tuesday - Friday
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
