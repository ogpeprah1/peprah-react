import React from "react";

function ServiceCard(props) {
  const { title, description, img } = props;
  return (
    <div className="rounded-md bg-black py-4 px-4 w-[full] md:w-[40%] flex gap-4">
      <img src={`${img}`} alt="" className="bg-green-400 h-full basis-[30%]" />
      <div className="basis-[70%]">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
