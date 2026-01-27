import React from "react";

function ProgressBar(props) {
  const progressBarStyle = {
    width: `${props.completed}%`,
  };

  return (
    <div className="relative h-4 w-full rounded-full bg-emerald-500/10 border border-emerald-500/20 overflow-hidden backdrop-blur-sm">
      {/* Animated gradient background */}
      <div
        style={progressBarStyle}
        className="relative h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-full transition-all duration-1000 ease-out overflow-hidden"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>

      {/* Glow effect */}
      <div
        style={{ width: `${props.completed}%` }}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-teal-400 blur-md opacity-50 transition-all duration-1000"
      ></div>
    </div>
  );
}

export default ProgressBar;
