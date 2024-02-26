import React from "react";

function ProgressBar(props) {
  const progressBarStyle = {
    width: `${props.completed}%`,
  };

  return (
    <div className="h-8 w-full rounded-xl m-6 bg-white">
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
