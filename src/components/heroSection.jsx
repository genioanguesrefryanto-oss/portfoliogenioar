import React from "react";
import TextHero from "./textHero";
import TiltedCard from "./TiltedCard";
import img5 from "../image/poto5.png"

const Hero = () => {
  return (
    <div className="hero-section absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] flex flex-wrap justify-around max-md:static max-md:w-full max-md:translate-x-0 max-md:translate-y-0 max-md:justify-center">
      <TextHero />
      <div className="right-hero">
        <div
          className="right-about-stack w-[25rem] h-[25rem] shrink-0 max-lg:w-80 max-lg:h-80 max-md:max-w-64 max-md:h-64 max-md:mt-20 max-[480px]:w-72 max-[480px]:h-72 max-[480px]:max-w-72"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <TiltedCard
            imageSrc={img5}
            altText="Hero image"
            captionText="GENIO ANGUES REFRYANTO"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showTooltip
            displayOverlayContent
            // overlayContent={
            //   // <p style={{ fontFamily: '"Cinzel", serif', fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.1em", color: 'var(--color-accent)' }}>
            //   //   Genio Angues Refryanto
            //   // </p>
            // }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
