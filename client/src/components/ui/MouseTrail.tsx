import { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseTrail() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the "blob" center
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  // A secondary point for a "trail" feel
  const trailX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const trailY = useSpring(mouseY, { damping: 30, stiffness: 100 });

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
      {/* Primary Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />
      
      {/* Secondary Accent Blob (Purple/Secondary) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.1] blur-[100px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-30%",
          translateY: "-30%",
          background: "radial-gradient(circle, #9D4EDD 0%, transparent 70%)",
        }}
      />

      {/* Tertiary Accent Blob (Cyan/Primary) */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.12] blur-[80px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-70%",
          translateY: "-70%",
          background: "radial-gradient(circle, #00FFFF 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
