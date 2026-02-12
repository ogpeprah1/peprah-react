import React from "react";

function ServiceCard(props) {
  const { title, description, img, index, large } = props;
  return (
    <div
      className={`group relative backdrop-blur-xl bg-emerald-500/5 rounded-3xl p-8 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden ${large ? "lg:p-12" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div
        className={`relative flex ${large ? "flex-col lg:flex-row" : "flex-col"} gap-6 items-start`}
      >
        {/* Icon with gradient background */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div
            className={`relative ${large ? "w-24 h-24" : "w-16 h-16"} bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300`}
          >
            <img
              src={img}
              alt={title}
              className={large ? "w-14 h-14" : "w-10 h-10"}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className={`${large ? "text-3xl lg:text-4xl" : "text-2xl"} font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:bg-clip-text transition-all`}
          >
            {title}
          </h3>
          <p className={`text-gray-300 text-sm leading-relaxed`}>
            {description}
          </p>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default ServiceCard;
