import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function GradientMouseTrail() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid motion
  const springConfig = { damping: 40, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Secondary point for trail stretching
  const trailX = useSpring(mouseX, { damping: 25, stiffness: 80 });
  const trailY = useSpring(mouseY, { damping: 25, stiffness: 80 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Primary Cyan/Green Blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.2] blur-[140px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsla(180, 100%, 50%, 0.6) 0%, transparent 70%)",
        }}
      />
      
      {/* Secondary Purple Blob (Trailing) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-30%",
          translateY: "-30%",
          background: "radial-gradient(circle, hsla(270, 100%, 60%, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Tertiary Deep Blue Accent */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.1] blur-[100px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-70%",
          translateY: "-70%",
          background: "radial-gradient(circle, hsla(210, 100%, 50%, 0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
