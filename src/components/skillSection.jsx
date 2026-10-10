import React from "react";
import PText from "./PText";
import H1Text from "./H1Text";
import Description from "./description";
import SectionLine from "./SectionLine";
import SkillsCard from "./skillsCard";

const skills = {
  frontend : [
    {
      nama: "HTML",
      icon: "https://cdn.simpleicons.org/html5/E34F26"
    },
    {
      nama: "CSS",
      icon: "https://cdn.simpleicons.org/css/1572B6"
    },
    {
      nama: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    { nama: "React", 
      icon: "https://cdn.simpleicons.org/react/61DAFB" 
    },
    { nama: "Tailwind", 
      icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" 
    },
  ],
  backend: [
    { nama: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  tools: [
    { nama: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { nama: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    {
      nama: "VSCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      nama: "npm",
      icon: "https://cdn.simpleicons.org/npm/CB3837",
    },
  ],
};

const categories = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Tools", items: skills.tools },
];

const SkillSection = () => {
  return (
    <div className="skills-section w-[90%] mx-auto my-40 max-md:w-[95%] max-md:my-24">
      <div className="text-skills flex flex-col gap-1 text-center">
        <PText text="TECH STACK" aos="fade-up"/>
        <H1Text text="My " span="Skills" fontWeight="lighter" big="big" aos="fade-up"/>
        <Description
          text={"The technologies and tools I use to turn ideas into functional web experiences."}
          className="mt-6 mb-28 text-putih/70 max-md:mt-8 max-md:mb-16"
          aos="fade-up"
        />
      </div>
      {categories.map((cat) => {
        return (
          <div> 
            <div data-aos="fade-up" data-aos-duration={1000 + 100 * cat}>
            <SectionLine text={cat.label} />
            </div>
            <br />
            <div className="skills-grid flex flex-wrap gap-[0.6rem] justify-center">
              {cat.items.map((item) => {
                return (
                  <div
                    data-aos="zoom-in-up"
                    data-aos-duration={800 + 100 * item}
                  >
                    <SkillsCard
                      language={item.nama}
                      img={item.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
