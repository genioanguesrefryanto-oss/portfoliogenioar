import React from "react";

const H1Text = ({
  text,
  fontWeight = "bolder",
  span,
  big,
  aos = "fade-right",
}) => {
  const weightClass = fontWeight === "lighter" ? "font-light" : "font-bold";
  const bigClass = big
    ? "text-[3.2rem] max-md:text-[2rem] max-[480px]:text-[1.7rem]"
    : "text-[2.5rem] max-md:text-[1.8rem] max-[480px]:text-[1.5rem]";
  return (
    <div>
      <h1
        className={`tracking-[0.1rem] text-white ${weightClass} ${bigClass}`}
        data-aos={aos}
        data-aos-duration="700"
      >
        {text}
        <span className="text-gold">{span}</span>
      </h1>
    </div>
  );
};

export default H1Text;
