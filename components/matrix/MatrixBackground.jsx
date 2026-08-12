'use client';

import React, { useEffect, useRef, useCallback } from 'react';
const MatrixBackground = () => {
  const theme = 'dark';
  const canvasRef = useRef(null);
  const torchRef = useRef(null);
  const mouseRef = useRef({ x: -500, y: -500 });
  const rafTorchRef = useRef(null);

  // Smooth torch follow using requestAnimationFrame
  const updateTorch = useCallback(() => {
    const el = torchRef.current;
    if (el) {
      const { x, y } = mouseRef.current;
      el.style.background = theme === 'dark'
        ? `radial-gradient(350px circle at ${x}px ${y}px, rgba(57, 255, 20, 0.12) 0%, rgba(0, 229, 255, 0.06) 30%, rgba(57, 255, 20, 0.02) 50%, transparent 70%)`
        : `radial-gradient(350px circle at ${x}px ${y}px, rgba(4, 120, 87, 0.10) 0%, rgba(3, 105, 161, 0.05) 30%, rgba(4, 120, 87, 0.02) 50%, transparent 70%)`;
    }
    rafTorchRef.current = requestAnimationFrame(updateTorch);
  }, [theme]);

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    rafTorchRef.current = requestAnimationFrame(updateTorch);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafTorchRef.current) cancelAnimationFrame(rafTorchRef.current);
    };
  }, [handleMouseMove, updateTorch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01MATRIXAIML∫∂Σπ√∞αβγδ'.split('');
    const fontSize = 16;
    const columnSpacing = 20;
    const columns = Math.ceil(canvas.width / columnSpacing);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 2,
        chars: [
          chars[Math.floor(Math.random() * chars.length)],
          chars[Math.floor(Math.random() * chars.length)],
          chars[Math.floor(Math.random() * chars.length)]
        ]
      };
    }

    let animationFrameId;

    const draw = () => {
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 5, 2, 0.1)' : 'rgba(240, 248, 245, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw faint vertical dashed tracks
      ctx.strokeStyle = theme === 'dark' ? 'rgba(0, 255, 102, 0.05)' : 'rgba(0, 200, 100, 0.03)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 15]);
      ctx.beginPath();
      for (let i = 0; i < columns; i++) {
        ctx.moveTo(i * columnSpacing, 0);
        ctx.lineTo(i * columnSpacing, canvas.height);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      // Mouse position for brightness boost
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * columnSpacing;
        const y = drop.y;

        // Distance from mouse — boost brightness near cursor (torch on rain)
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const torchRadius = 200;
        const torchBoost = dist < torchRadius ? (1 - dist / torchRadius) : 0;

        // Tail (Cyan)
        const tailAlpha = 0.3 + torchBoost * 0.5;
        ctx.fillStyle = theme === 'dark'
          ? `rgba(0, 229, 255, ${tailAlpha})`
          : `rgba(0, 180, 220, ${tailAlpha * 0.6})`;
        ctx.fillText(drop.chars[2], x, y - fontSize * 2);

        // Trail (Emerald)
        const trailAlpha = 0.5 + torchBoost * 0.5;
        ctx.fillStyle = theme === 'dark'
          ? `rgba(0, 255, 102, ${trailAlpha})`
          : `rgba(0, 200, 100, ${trailAlpha * 0.6})`;
        ctx.shadowBlur = 6 + torchBoost * 14;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fillText(drop.chars[1], x, y - fontSize);

        // Head (White/Emerald Glow — brightest near cursor)
        const headGlow = 10 + torchBoost * 20;
        ctx.fillStyle = theme === 'dark'
          ? `rgba(255, 255, 255, ${0.7 + torchBoost * 0.3})`
          : `rgba(0, 51, 17, ${0.5 + torchBoost * 0.5})`;
        ctx.shadowBlur = headGlow;
        ctx.shadowColor = theme === 'dark' ? '#39FF14' : '#00E5FF';
        ctx.fillText(drop.chars[0], x, y);

        ctx.shadowBlur = 0;

        if (Math.random() > 0.9) {
          drop.chars.unshift(chars[Math.floor(Math.random() * chars.length)]);
          drop.chars.pop();
        }

        drop.y += drop.speed;

        if (drop.y > canvas.height + fontSize * 3 && Math.random() > 0.98) {
          drop.y = -fontSize * 3;
          drop.speed = 2 + Math.random() * 2;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas rain */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: theme === 'dark' ? 0.65 : 0.25 }}
      />

      {/* Torch spotlight overlay — follows mouse at 60fps */}
      <div
        ref={torchRef}
        className="absolute inset-0 transition-none"
        style={{ willChange: 'background' }}
      />

      {/* Floating ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse pointer-events-none"
        style={{ background: theme === 'dark' ? 'rgba(57, 255, 20, 0.08)' : 'rgba(4, 120, 87, 0.06)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full blur-[120px] animate-pulse pointer-events-none"
        style={{
          background: theme === 'dark' ? 'rgba(0, 229, 255, 0.06)' : 'rgba(3, 105, 161, 0.04)',
          animationDelay: '2s',
          animationDuration: '4s'
        }}
      />
    </div>
  );
};

export default MatrixBackground;
