import React from "react";
import PText from "./PText";
import H1Text from "./H1Text";
import Description from "./description";
import SocialCard from "./socialCard";

const sapa = [
    {
        label: 'Say Hello',
        icon: 'ti ti-mail',
        link: 'mailto:genioanguesrefryanto@gmail.com'
    },
    {
        label: 'View Resume',
        icon: 'ti ti-file-cv',
        link: ''
    }
]

const media = [
    {
        label: 'Github',
        icon: 'ti ti-brand-github',
        link : 'https://github.com/genioanguesrefryanto-oss'
    },
    {
        label: 'Instagram',
        icon: 'ti ti-brand-instagram',
        link : 'https://www.instagram.com/genio.ref?stkn=MW0yeTUxNmk0eHA2bw%3D%3D&utm_source=qr'
    },
    {
        label: 'LinkedIn',
        icon: 'ti ti-brand-linkedin',
        link : 'https://www.linkedin.com/in/genio-angues-refryanto-91477a3a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    }
]

const ContactSection = () => {
  return (
    <div className="contact-wrap text-center">
      <div className="available flex items-center justify-center gap-2 w-fit mx-auto px-3 pt-[0.3rem] pb-[0.4rem] rounded-[15px] text-gold bg-dark-gold/20">
        <i className="fi fi-rr-dot-circle text-[0.7rem] mt-[0.1rem] animate-kedip"></i>
        <p>Available for work</p>
      </div>
      <br />
      <br />
      <PText text={"LET'S CONNECT"} />
      <br />
      <H1Text text={"HAVE SOMETHING IN MIND?"} fontWeight="lighter" />
      <H1Text text={"LET'S TALK "} fontWeight="lighter" span={"ABOUT IT"} />
      <br />
      <Description
        text={
          "Whether you have a project, an idea, or simply want to connect, feel free to reach out."
        }
        className="text-[#707070]"
          />
          <div className="sapa-btn my-20 flex justify-center gap-8 [&_i]:text-[1.5rem] max-md:flex-col max-md:items-center max-md:gap-4 max-md:my-12" data-aos="zoom-in-up" data-aos-duration="1000">
              {sapa.map((s, idx) => (
                  <a href={s.link} key={idx}>
                      <SocialCard social={s.label} link={s.icon} className={idx === sapa.length - 1
                        ? "border-[#7070705b] text-putih/[0.664] px-16 py-[1.4rem] w-fit max-md:px-10 max-md:py-[1.2rem] max-md:w-full max-md:max-w-[280px] max-md:justify-center"
                        : "border-gold/40 text-putih px-16 py-[1.4rem] w-fit max-md:px-10 max-md:py-[1.2rem] max-md:w-full max-md:max-w-[280px] max-md:justify-center"}/>
                  </a>
              ))}
          </div>
          <div className="v-line w-40 h-[0.2rem] mx-auto rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.4),rgba(29,107,162,0.01))]" data-aos="fade" data-aos-duration="1000"></div>
          <div className="social-btn flex justify-center gap-4 mt-20 max-md:flex-wrap max-md:gap-3 max-md:mt-12">
              {media.map((m) => (
                  <a href={m.link} data-aos="fade-up" data-aos-duration="1000">
                      <SocialCard social={m.label} link={m.icon} className="border-grey/20 text-[#999999] px-[1.1rem] py-[0.7rem] hover:border-dark-gold hover:text-gold" />
                  </a>
              ))}
          </div>
    </div>
  );
};

export default ContactSection;
