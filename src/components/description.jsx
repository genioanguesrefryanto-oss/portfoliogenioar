import React from "react";

const Description = ({text, className = '', aos= 'fade-right'}) => {
  return (
    <div>
      <p className={`text-[1.1rem] font-light ${className}`} data-aos={aos} data-aos-duration="900">
        {text}
      </p>
    </div>
  );
};

export default Description;
