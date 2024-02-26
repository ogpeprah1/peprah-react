import React from "react";

function ServiceCard(props) {
  return (
    <div className="rounded-md bg-black py-4 px-4 w-[full] md:w-[40%] flex gap-4">
      <div className="bg-green-400 h-full basis-[30%]"></div>
      <div className="basis-[70%]">
        <h1 className="text-white text-3xl font-bold mb-4">{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
