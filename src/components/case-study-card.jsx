import React from "react";

function CaseStudyCard(props) {
  const { title, description, img, case_url, tags, index, large } = props;
  return (
    <div
      className={`group relative backdrop-blur-xl bg-emerald-500/5 rounded-3xl overflow-hidden border border-emerald-500/20 hover:scale-[1.02] hover:border-emerald-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col ${large ? "h-full" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section with Overlay */}
      <div
        className={`relative ${large ? "h-[300px]" : "h-[200px]"} overflow-hidden`}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

        {/* Floating gradient orb on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div
        className={`relative ${large ? "p-8" : "p-6"} bg-black/40 backdrop-blur-sm flex-1 flex flex-col`}
      >
        <h3
          className={`text-white ${large ? "text-2xl lg:text-3xl" : "text-xl md:text-2xl"} font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:bg-clip-text transition-all`}
        >
          {title}
        </h3>

        <p
          className={`text-gray-300 ${large ? "text-base" : "text-sm"} mb-4 leading-relaxed ${large ? "line-clamp-4" : "line-clamp-3"}`}
        >
          {description}
        </p>

        {/* View Code Link */}
        <a
          href={case_url}
          target="_blank"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-teal-400 font-semibold transition-colors group/link"
          rel="noreferrer"
        >
          View Code
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags
            .trim()
            .split(",")
            .map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full border border-emerald-500/30 backdrop-blur-sm"
              >
                {tag.trim()}
              </span>
            ))}
        </div>
      </div>

      {/* Decorative corner gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default CaseStudyCard;
