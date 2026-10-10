import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent = null,
}) {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]), {
    stiffness: 300,
    damping: 30,
  });
  const scale = useSpring(scaleOnHover, { stiffness: 300, damping: 30 });

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xVal);
    y.set(yVal);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        perspective: "800px",
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          scale: isHovering ? scale : 1,
          transformStyle: "preserve-3d",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 20%",
            display: "block",
          }}
        />
        {showTooltip && captionText && (
          <div
            style={{
              position: "absolute",
              bottom: "0.75rem",
              left: "0.75rem",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              padding: "0.35rem 0.75rem",
              borderRadius: "6px",
              fontSize: "0.8rem",
              pointerEvents: "none",
            }}
          >
            {captionText}
          </div>
        )}
        {displayOverlayContent && overlayContent && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              pointerEvents: "none",
            }}
          >
            {overlayContent}
          </div>
        )}
      </motion.div>
    </div>
  );
}