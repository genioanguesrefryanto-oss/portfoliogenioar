import React from "react";
import PText from "./PText";
import H1Text from "./H1Text";
import Description from "./description";

const TextHero = () => {
  return (
    <div className="text-hero grid w-[33rem] gap-6 z-[9999] text-white max-lg:w-[28rem] max-md:relative max-md:top-auto max-md:translate-x-0 max-md:translate-y-0 max-md:w-full max-md:gap-4 max-md:px-[5%] max-md:pt-8">
      <PText text='FRONTEND DEVELOPER'/>
      <H1Text text="I'M Genio" span=" Software Engineer" fontWeight="lighter" big={'big'}/>
      <Description text='Creating modern, responsive, and elegant websites that transform ideas' />
      <div className="text-hero-button" data-aos="fade-right" data-aos-duration="1100">
        <a href="#project">
          <button className="px-5 py-4 bg-transparent border border-gold text-putih rounded-[20px] cursor-pointer shadow-[0_0_10px_1px_rgba(201,151,28,0.5)]">MY PROJECTS</button>
        </a>
      </div>
      <div className="skills-wrapper flex self-start mt-4" >
        <div className="skills-tech flex gap-6 px-6 py-4 border border-dark-gold rounded-2xl bg-itam/15 max-md:gap-3 max-md:px-3 max-md:py-3 max-md:flex-wrap max-md:justify-center" >
          <i className="si si-html5 si--color text-[2rem] leading-none transition duration-300 hover:-translate-y-[5px] hover:drop-shadow-[0_0_10px_rgba(255,210,77,1)]" aria-hidden="true"></i>
          <i className="si si-css si--color text-[2rem] leading-none transition duration-300 hover:-translate-y-[5px] hover:drop-shadow-[0_0_10px_rgba(255,210,77,1)]" aria-hidden="true"></i>
          <i className="si si-javascript si--color text-[2rem] leading-none transition duration-300 hover:-translate-y-[5px] hover:drop-shadow-[0_0_10px_rgba(255,210,77,1)]" aria-hidden="true"></i>
          <i className="si si-react si--color text-[2rem] leading-none transition duration-300 hover:-translate-y-[5px] hover:drop-shadow-[0_0_10px_rgba(255,210,77,1)]" aria-hidden="true"></i>
          <i className="si si-github text-white text-[2rem] leading-none transition duration-300 hover:-translate-y-[5px] hover:drop-shadow-[0_0_10px_rgba(255,210,77,1)]" aria-hidden="true"></i>
          <i className="si si-tailwindcss si--color text-[2rem] leading-none transition duration-300 hover:-translate-y-[5px] hover:drop-shadow-[0_0_10px_rgba(255,210,77,1)]" aria-hidden="true"></i>
        </div>
      </div>
      
    </div>
  );
};

export default TextHero;
