import React from "react";

const Services = () => {
  return (
    <div className="bg-primary p-10 h-1/2 text-background flex flex-col justify-center items-center">
      <span className="text-5xl pb-28">Services</span>
      <div className="flex flex-row space-x-96">
        <div className="flex flex-col">
          <span className="text-3xl text-center pb-10">St Lukes</span>
          <span className="text-xl w-[32rem] text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            erat et elit rhoncus tristique in quis elit. Fusce vestibulum,
            sapien quis interdum hendrerit, elit ipsum luctus elit, ac tincidunt
            velit mauris sit amet lectus.
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl text-center pb-10">Trinity</span>
          <span className="text-xl w-[32rem] text-center ">
            Sed lacinia est auctor elit accumsan, nec finibus odio tristique.
            Nunc nec neque ac metus condimentum suscipit. Integer pellentesque
            libero nec ex tempus, eu hendrerit libero tempor.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
