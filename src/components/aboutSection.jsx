import ProfileCard from "../ui/ProfileCard";
import img6 from "../image/foto6.jpeg";
import img5 from '../image/fotoabout.jpeg';
import img7 from '../image/gambarabout.jpeg';
import MusicPlayer from "./music";

const AboutSection = () => {
  return (
    <div className="about-wrapper w-full flex items-center justify-between min-h-screen px-[6rem] py-[8rem] gap-[6rem] bg-darkgrey relative z-[4] max-lg:px-[5%] max-lg:py-24 max-lg:gap-12 max-md:flex-col max-md:items-start max-md:gap-16">
      {/* class pertama: teks (flex column) */}
      <div className="about-left flex flex-col items-start gap-6 max-w-[40rem]">
        <h1
          className="text-[3.2rem] font-light tracking-[0.1rem] text-white max-md:text-[2rem] max-[480px]:text-[1.7rem]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          About<span className="text-gold"> Me</span>
        </h1>
        <h2
          className="about-desc font-light text-[1.2rem] leading-[1.8] tracking-[0.05rem] text-putih/70"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          My journey in the digital world began during my vocational high school
          years as a self-taught learner, I am accustomed to solving problems
          independently—to me, coding is a living art of logic.
          <br /> <br />
          I am currently pursuing my education at Bina Sarana Informatika University, A combination of technical skills and strong communication abilities is my greatest asset in every project.
        </h2>
        <MusicPlayer/>
      </div>

      {/* class kedua: isi bebas (placeholder) */}
      <div className="about-right w-[min(100%,26rem)] max-md:w-[min(100%,20rem)]">
        {/* konten kanan bebas — misal MusicPlayer, galerySlide, atau image */}
        <ProfileCard
          name="Genio Angues Refryanto"
          title="Web Devloper"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={img6}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
    </div>
  );
};

export default AboutSection;
