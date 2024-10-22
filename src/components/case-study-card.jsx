import React from "react";

function CaseStudyCard(props) {
  const { title, description, img, case_url, tags } = props;
  return (
    <div
      className="rounded-md bg-green-400 hover:bg-red-400  
    w-[full] h-fit md:w-[30%] flex-col gap-5 duration-700"
    >
      <div className="h-[150px] overflow-hidden">
        <img src={img} alt="" className="w- " />
      </div>

      <div className="px-5 py-2 bg-black rounded-md">
        <h1 className="text-white text-2xl md:text-2xl font-bold my-4">
          {title}
        </h1>
        <p className="mb-3">{description}</p>
        <a
          href={case_url}
          target="_blank"
          className="text-green-400"
          rel="noreferrer"
        >
          view code
        </a>
        <div className="mt-4 flex gap-2">
          {tags.split(",").map((tag) => (
            <span
              key={tag.id}
              className="rounded-full px-3 py-1 font-semibold text-gray-900 bg-gray-200 text-[0.7em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyCard;
