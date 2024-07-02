import React from "react";

const TProgressBar = ({ steps, step }: { steps: number; step: number }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: steps ?? 0 }, (_, i) => (
        <div
          key={i}
          className={`w-16 sm:w-12 md:w-24 h-1  rounded-full ${
            i < (step ?? 0) ? "bg-[#0177fd]" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default TProgressBar;
