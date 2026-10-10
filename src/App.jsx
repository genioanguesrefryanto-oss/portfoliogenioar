import { useEffect } from "react";
import Hero from "./components/heroSection";
import Navbar from "./components/Navbar";
import Particles from "./components/oriParticels";
import About from "./components/aboutSection";
import SideRays from "./components/overlay";
import SkillsCard from "./components/skillsCard";
import SkillSection from "./components/skillSection";
import Project from "./components/projectSection";
import ProjectCard from "./components/projectCard";
import ContactSection from "./components/contactSection";
import WelcomeOverlay from "./components/welcomeOverlay";
import Snowfall from "react-snowfall";
function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 0, delay: 0 });
  }, []);
  return (
    <div>
      <div className="fixed inset-0 z-[3] h-full w-full pointer-events-none">
        <Particles
          particleColors={["#072dd3"]}
          particleCount={150}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <WelcomeOverlay/>
      {/* <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <SideRays />
      </div> */}
      <Navbar />
      <div
        className="relative min-h-screen z-[1] max-md:pt-20 max-md:pb-8"
        id="home"
      >
        <Hero />
      </div>
      <div className="about-app relative z-[1] w-full shadow-[0_0_30px_3px_rgb(11,11,11)]" id="about">
        {" "}
        {/* tambah wrapper */}
        <About />
      </div>
      <div className="skills-app mt-4 pt-[0.1rem]" id="skills">
        <SkillSection />
      </div>
      <div className="project-app w-[90%] pt-20 mx-auto max-md:w-[95%] max-md:pt-12" id="project">
        <Project />
      </div>
      <div id="contact" className="mt-40 py-32 max-md:mt-20 max-md:py-20 max-md:px-[5%]">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
