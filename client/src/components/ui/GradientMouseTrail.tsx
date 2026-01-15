import { useEffect, useRef } from "react";

export function GradientMouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const points = useRef<{ x: number; y: number }[]>([]);
  const MAX_POINTS = 40;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update points
      points.current.unshift({ x: mouse.current.x, y: mouse.current.y });
      if (points.current.length > MAX_POINTS) {
        points.current.pop();
      }

      if (points.current.length > 2) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);

        for (let i = 1; i < points.current.length - 2; i++) {
          const xc = (points.current[i].x + points.current[i + 1].x) / 2;
          const yc = (points.current[i].y + points.current[i + 1].y) / 2;
          ctx.quadraticCurveTo(points.current[i].x, points.current[i].y, xc, yc);
        }

        // Color and glow effect
        const gradient = ctx.createLinearGradient(
          points.current[0].x, points.current[0].y,
          points.current[points.current.length - 1].x, points.current[points.current.length - 1].y
        );
        
        // Refined organic gradient colors from the reference
        gradient.addColorStop(0, "hsla(180, 100%, 50%, 0.6)"); // Cyan
        gradient.addColorStop(0.5, "hsla(280, 100%, 60%, 0.4)"); // Purple
        gradient.addColorStop(1, "transparent");

        ctx.shadowBlur = 40;
        ctx.shadowColor = "hsla(180, 100%, 50%, 0.4)";
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 45;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Secondary subtle inner glow
        ctx.shadowBlur = 10;
        ctx.lineWidth = 15;
        ctx.strokeStyle = "hsla(180, 100%, 80%, 0.2)";
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ filter: "blur(40px)", opacity: 0.8 }}
    />
  );
}
