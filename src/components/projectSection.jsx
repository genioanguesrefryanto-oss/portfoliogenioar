import React from "react";
import H1Text from "./H1Text";
import PText from "./PText";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <div>
      <div className="ppp mb-12">
        <PText text={"SELECTED WORK"} /> <br />
        <div className="h1 relative before:absolute before:w-32 before:h-[3px] before:bg-dark-gold before:bottom-[-1rem] before:left-0">
          <H1Text
            text={"My "}
            span={"Projects"}
            fontWeight="lighter"
            big={"big"}
          />
        </div>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Project;
