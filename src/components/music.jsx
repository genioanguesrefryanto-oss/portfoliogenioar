import { useState, useEffect, useRef } from "react";
import song from "../music/Mariah Carey - Obsessed (Lyrics) [IIS3HTulPyM].mp3";
import song1 from "../music/Adele - Send My Love (To Your New Lover).mp3";
const DOTS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + Math.random() * 80}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${5 + Math.random() * 5}s`,
  size: Math.random() > 0.5 ? "3px" : "2px",
}));


export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalSec, setTotalSec] = useState(0);
  const audioRef = useRef(null);
  const seekTo = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * audioRef.current.duration;
  };
  const secToTime = (s) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  const currentSec = Math.round((progress / 100) * totalSec);

  const skip = (sec) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      Math.max(audioRef.current.currentTime + sec, 0),
      audioRef.current.duration || 0
    );
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying((p) => !p);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const onLoadedMetadata = () => {
      setTotalSec(Math.floor(audio.duration));
    };

    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);
  
  return (
    <>
      <div className="mp-card font-heading w-90 max-w-full bg-transparent border border-gold/15 rounded-2xl p-4 flex flex-col gap-2 relative overflow-hidden shadow-[0_0_0_1px_rgba(59,130,246,0.05),0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)] before:content-[''] before:absolute before:-top-20 before:-right-20 before:w-[200px] before:h-[200px] before:rounded-full before:pointer-events-none before:bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] after:content-[''] after:absolute after:-bottom-15 after:-left-10 after:w-[180px] after:h-[180px] after:rounded-full after:pointer-events-none after:bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)]" data-aos="zoom-in-up" data-aos-duration="2000">
        {/* particles */}
        <div className="mp-particles absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {DOTS.map((d) => (
            <div
              key={d.id}
              className="mp-dot absolute w-[2px] h-[2px] rounded-full bg-gold/40 animate-float-dot"
              style={{
                left: d.left,
                bottom: "-4px",
                width: d.size,
                height: d.size,
                animationDelay: d.delay,
                animationDuration: d.duration,
              }}
            />
          ))}
        </div>

        {/* info */}
        <div className="mp-info text-center">
          <p className="mp-title font-display text-2xl font-semibold text-[#e8f4ff] mb-1 tracking-[0.14em]">OBSESSED</p>
          <p className="mp-artist font-heading text-xs tracking-[0.14em] text-[rgba(202,230,160,0.55)] uppercase">Send To My Love</p>
        </div>

        <div className="mp-divider w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.12)] to-transparent" />

        {/* progress */}
        <div className="mp-progress flex flex-col gap-[6px]">
          <div className="mp-track w-full h-[2px] bg-white/[0.08] rounded-full relative cursor-pointer" onClick={seekTo}>
            <div className="mp-fill h-full bg-gradient-to-r from-dark-gold/80 to-gold/90 rounded-full relative transition-[width] duration-[800ms] ease-linear after:content-[''] after:absolute after:-right-1 after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:rounded-full after:bg-gold after:shadow-[0_0_6px_rgba(59,130,246,0.8)]" style={{ width: `${progress}%` }} />
          </div>
          <div className="mp-times flex justify-between text-[10px] tracking-[0.08em] text-[rgba(208,230,160,0.4)]">
            <span>{secToTime(currentSec)}</span>
            <span>{secToTime(totalSec)}</span>
          </div>
        </div>

        {/* controls */}
        <div className="mp-controls flex items-center justify-center gap-5">
          <button
            className="mp-ctrl bg-none cursor-pointer text-[rgba(160,200,230,0.45)] flex flex-col items-center justify-center gap-[3px] transition-colors duration-200 hover:text-gold/85 active:scale-[0.88] text-[25px] leading-none border-none"
            onClick={() => skip(-10)}
            aria-label="rewind 10 seconds"
          >
            <i className="fi fi-rr-rewind"></i>
          </button>

          <button
            className="mp-play border-none bg-transparent cursor-pointer flex items-center justify-center transition-all duration-200 text-gold/90 text-[18px] hover:bg-gold/15 hover:border-gold/60 hover:shadow-[0_0_16px_rgba(59,130,246,0.25)] active:scale-[0.92]"
            onClick={togglePlay}
            aria-label={playing ? "pause" : "play"}
          >
            {playing ? (
              <i className="fi fi-rr-pause"></i>
            ) : (
              <i className="fi fi-rr-play"></i>
            )}
          </button>

          <button
            className="mp-ctrl bg-none cursor-pointer text-[rgba(160,200,230,0.45)] flex flex-col items-center justify-center gap-[3px] transition-colors duration-200 hover:text-gold/85 active:scale-[0.88] text-[25px] leading-none border-none"
            onClick={() => skip(10)}
            aria-label="forward 10 seconds"
          >
            <i className="fi fi-rr-rewind" style={{ transform: "scaleX(-1)" }}></i>
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={song1} />
    </>
  );
}