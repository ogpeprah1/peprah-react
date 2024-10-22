import React from "react";

function ProgressBar(props) {
  const progressBarStyle = {
    width: `${props.completed}%`,
  };

  return (
    <div className="h-7 w-full md:w-[70%] rounded-xl m-2 md:m-6 bg-[#202124]">
      <div
        style={progressBarStyle}
        className="h-full bg-green-400 rounded-xl text-right flex items-center justify-center"
      >
        <span className="p-5 text-white font-semibold">{`${props.completed}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
