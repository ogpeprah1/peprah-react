import React from "react";

function ServiceCard(props) {
  const { title, description, img } = props;
  return (
    <div className="rounded-md bg-black py-4 px-4 w-[full] md:w-[40%] flex gap-5">
      <img src={img} alt="" className="w-[100px] h-[100px]" />
      <div className="basis-[70%]">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-1xl">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
