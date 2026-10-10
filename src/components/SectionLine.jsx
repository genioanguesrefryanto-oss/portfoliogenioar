import React from "react";

const SectionLine = ({text}) => {
  return (
    <div className="section-title flex items-center gap-5">
      <div className="line flex-1 h-px bg-gradient-to-r from-transparent to-white/10"></div>
      <span className="text-white/60 tracking-[0.6rem] text-2xl">{text}</span>
      <div className="line flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
    </div>
  );
};

export default SectionLine;
