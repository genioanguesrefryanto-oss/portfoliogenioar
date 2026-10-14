import React from "react";
import img3 from "../image/bokurce.png";
import img4 from "../image/destinasi wisata.png"
import img5 from "../image/Brithday Web.png"

const projects = [
  {
    label: "Bokurce Library",
    project: "Bokurce Library",
    description: "Library management system, PHP + MySQL, Stack data structure",
    tech: ["PHP", "MySQL", "CSS", "JavaScript", "GSAP"],
    img: img3,
    link : 'https://bokurce-library.lovestoblog.com/'
  },
  {
    label: "Destinasi Wisata",
    project: "Destinasi Wisata",
    description: "Tour Destination at west Java, React JS, Using SSoT. Frontend Only",
    tech: ["Tailwind", "JavaScript", "React", "Lenis", "AOS"],
    img: img4,
    link : 'https://jelajahi-jabar.vercel.app/'
  },
  {
    label: "Brithday Web",
    project: "Brithday Web",
    description: "A simple and heartfelt birthday website made to celebrate a special day",
    tech: [ "Tailwind", "JavaScript", "GSAP", "React", "AOS"],
    img: img5,
    link : 'https://birthday-web-pi-swart.vercel.app/'
  },
];

const ProjectCard = () => {
  return (
    <div>
      {projects.map((cat, index) => (
        <a href={cat.link} key={index} className="block">
        <div className="project-card group w-full flex justify-between gap-8 rounded-[20px] border-b border-[#282828] bg-transparent p-12 text-white transition duration-300 hover:bg-[rgba(255,210,77,0.01)] max-md:flex-col max-md:gap-6 max-md:p-6" data-aos="zoom-in-up" data-aos-duration='1000'>
          <div className="project-kiri flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
            <div className="label text-white/10 text-[1.7rem] transition duration-300 group-hover:text-gold max-[480px]:hidden">{String(index + 1).padStart(2, "0")}</div>
            <div className="judul grid gap-4">
                <h1 className="text-5xl font-light transition duration-300 group-hover:text-gold max-lg:text-[2.2rem] max-md:text-[1.8rem]">{cat.label}</h1>
                <p className="text-[1.1rem] font-light text-[#717171]">{ cat.description }</p>
              <div className="btn flex gap-[0.6rem]">
                {cat.tech.map((tech, i) => (
                  <button key={tech} className={`px-3 py-[0.3rem] bg-transparent text-[#626262] border transition-all duration-400 group-hover:text-accent-dark group-hover:border-accent-dark border-[#282828] font-body text-base rounded-[20px]`}>{tech}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="project-kanan flex items-center gap-8 text-white/10 max-md:justify-between">
            <img className="z-[1] aspect-[20/10] object-cover w-72 rounded-[20px] max-lg:w-56 max-md:w-full max-md:aspect-video" src={cat.img} alt="" />
            <i className="fi fi-rr-angle-right z-[1] transition duration-300 group-hover:text-gold max-md:hidden"></i>
          </div>
        </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectCard;
