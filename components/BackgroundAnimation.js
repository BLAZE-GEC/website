"use client";

import { useEffect, useRef } from "react";

/**
 * Faithful port of the target design's background animation:
 * a grid of small dashes that gently oscillate, and swing to point
 * toward the mouse cursor when it's nearby.
 */
export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 45;
    const dashLength = 7;
    const mouse = { x: null, y: null, radius: 240 };
    let time = 0;
    let animationId;

    // Cached gradient so we're not recalculating colors every frame
    let gradient;
    function updateGradient() {
      gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(26, 38, 28, 0.04)"); // greenish charcoal
      gradient.addColorStop(1, "rgba(210, 139, 38, 0.04)"); // gold
    }
    updateGradient();

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateGradient();
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      time += 0.003;

      // Batch 1 — all idle/base dashes drawn in a single stroke call
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.0;
      ctx.lineCap = "round";

      const activeDashes = [];

      for (let x = spacing / 2; x < width + spacing; x += spacing) {
        for (let y = spacing / 2; y < height + spacing; y += spacing) {
          let isNearMouse = false;
          let angle = 0;

          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              isNearMouse = true;
              activeDashes.push({ x, y, dx, dy, dist });
            } else {
              angle = Math.sin(x * 0.004 + y * 0.004 + time) * Math.PI;
            }
          } else {
            angle = Math.sin(x * 0.004 + y * 0.004 + time) * Math.PI;
          }

          if (!isNearMouse) {
            const x2 = x + Math.cos(angle) * dashLength;
            const y2 = y + Math.sin(angle) * dashLength;
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
          }
        }
      }
      ctx.stroke();

      // Batch 2 — dashes near the mouse, drawn individually with a gradient tint
      if (activeDashes.length > 0) {
        activeDashes.forEach((dash) => {
          const factor = (mouse.radius - dash.dist) / mouse.radius;
          const opacity = 0.04 + factor * 0.16;
          const length = dashLength + factor * 6;
          const angle = Math.atan2(dash.dy, dash.dx);

          const x2 = dash.x + Math.cos(angle) * length;
          const y2 = dash.y + Math.sin(angle) * length;

          const ratio = (dash.x + dash.y) / (width + height);
          const r = Math.round(26 + ratio * (210 - 26));
          const g = Math.round(38 + ratio * (139 - 38));
          const b = Math.round(28 + ratio * (38 - 28));

          ctx.beginPath();
          ctx.moveTo(dash.x, dash.y);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.lineCap = "round";
          ctx.stroke();
        });
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1, backgroundColor: "transparent" }}
    />
  );
}