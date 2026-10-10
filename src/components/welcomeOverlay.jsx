import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";

const NAME = "Genio A.R";

const DOTS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 90}%`,
  delay: `${Math.random() * 3}s`,
  duration: `${4 + Math.random() * 4}s`,
  size: Math.random() > 0.5 ? "3px" : "2px",
}));

const WelcomeOverlay = () => {
  const [show, setShow] = useState(false);
  const overlayRef = useRef(null);
  const panelLeftRef = useRef(null);
  const panelRightRef = useRef(null);
  const countRef = useRef(null);
  const lettersRef = useRef([]);
  const lineRef = useRef(null);
  const greetRef = useRef(null);
  const tagRef = useRef(null);

  const letters = useMemo(() => NAME.split(""), []);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    if (!visited) {
      setShow(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    document.body.style.overflow = "hidden";
    lettersRef.current = lettersRef.current.slice(0, letters.length);

    const unlockScroll = () => {
      document.body.style.overflow = "";
    };

    const safetyTimer = setTimeout(() => {
      unlockScroll();
      if (overlayRef.current) overlayRef.current.style.display = "none";
      setShow(false);
    }, 15000);

    const counter = { val: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        clearTimeout(safetyTimer);
        unlockScroll();
        setTimeout(() => setShow(false), 50);
      },
    });

    tl.set(overlayRef.current, { display: "block" })

      // loading counter 0 -> 100
      .to(counter, {
        val: 100,
        duration: 1.3,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = String(
              Math.floor(counter.val)
            ).padStart(3, "0");
          }
        },
      })
      .to(countRef.current, { opacity: 0, duration: 0.35 }, "+=0.1")

      // tag line "FRONTEND DEVELOPER"
      .from(
        tagRef.current,
        { opacity: 0, y: 10, duration: 0.5 },
        "<"
      )

      // letters reveal
      .from(
        lettersRef.current,
        {
          y: 60,
          opacity: 0,
          rotateX: 60,
          stagger: 0.07,
          duration: 2,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )

      // line
      .from(
        lineRef.current,
        { scaleX: 0, duration: 0.5, ease: "power2.inOut" },
        "-=0.25"
      )

      // greeting
      .from(
        greetRef.current,
        { y: 16, opacity: 0, duration: 0.6 },
        "-=0.2"
      )

      // hold
      .to({}, { duration: 0.8 })

      // curtain split exit
      .to(
        panelLeftRef.current,
        { xPercent: -100, duration: 1, ease: "power4.inOut" },
        "exit"
      )
      .to(
        panelRightRef.current,
        { xPercent: 100, duration: 1, ease: "power4.inOut" },
        "exit"
      )
      .to(
        [tagRef.current, lineRef.current, greetRef.current, ...lettersRef.current],
        { opacity: 0, duration: 0.4 },
        "exit"
      )
      .set(overlayRef.current, { display: "none" });

    return () => {
      clearTimeout(safetyTimer);
      unlockScroll();
    };
  }, [show, letters.length]);

  if (!show) return null;

  return (
    <div className="welcome-overlay fixed inset-0 z-[99999] hidden" ref={overlayRef}>
      <div className="welcome-panel welcome-panel-left absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-itam" ref={panelLeftRef}>
        <div className="welcome-dots absolute inset-0 pointer-events-none">
          {DOTS.map((d) => (
            <span
              key={d.id}
              className="welcome-dot absolute rounded-full bg-gold/50 animate-welcome-float"
              style={{
                left: d.left,
                top: d.top,
                animationDelay: d.delay,
                animationDuration: d.duration,
                width: d.size,
                height: d.size,
              }}
            />
          ))}
        </div>

        <div className="welcome-inner px-[5%] text-center [perspective:600px]">
          <span className="welcome-count block mb-2 font-heading text-[clamp(2rem,6vw,3.5rem)] font-light tracking-[0.3rem] text-gold/50" ref={countRef}>
            000
          </span>

          <p className="welcome-tag mb-4 text-[0.85rem] font-bold tracking-[0.4rem] text-gold" ref={tagRef}>
            FRONTEND DEVELOPER
          </p>

          <h1 className="welcome-name flex justify-center font-display text-[clamp(3rem,10vw,6rem)] tracking-[0.4rem] text-putih [text-shadow:0_0_40px_rgba(59,130,246,0.35)]">
            {letters.map((l, i) => (
              <span
                key={i}
                className="welcome-letter inline-block text-gold"
                ref={(el) => (lettersRef.current[i] = el)}
              >
                {l}
              </span>
            ))}
          </h1>

          <div className="welcome-line mx-auto my-6 h-[2px] w-24 origin-center bg-biru" ref={lineRef}></div>

          <p className="welcome-greet text-[clamp(0.9rem,2vw,1.2rem)] font-light tracking-[0.1rem] text-putih/70" ref={greetRef}>
            Welcome to my little corner of the internet
          </p>
        </div>
      </div>

      <div className="welcome-panel welcome-panel-right absolute inset-0 w-full h-full bg-itam -z-[1]" ref={panelRightRef}></div>
    </div>
  );
};

export default WelcomeOverlay;