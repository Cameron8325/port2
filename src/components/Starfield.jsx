import React, { useEffect, useRef } from 'react';

export default function Starfield({ starCount = 100 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initialize dimensions
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let prevWidth = width;
    let prevHeight = height;

    function hexToRgba(hex, alpha) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Generate stars
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      baseAlpha: Math.random() * 0.5 + 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.005,
      dx: (Math.random() - 0.5) * 0.05,
      dy: (Math.random() - 0.5) * 0.05,
      color: Math.random() > 0.95 ? '#a78bfa' : '#ffffff'
    }));

    // Draw loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Move
        star.x += star.dx;
        star.y += star.dy;

        // Wrap
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle
        star.phase += star.speed;
        const alpha = star.baseAlpha + Math.sin(star.phase) * 0.2;
        const clampedAlpha = Math.max(0, Math.min(1, alpha));

        // Draw gradient star
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 1.5
        );
        gradient.addColorStop(0, hexToRgba(star.color, clampedAlpha));
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Handle true resizes/orientation and ignore minor bounce resizes
    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      // If the resize is too small (mobile overscroll), just update canvas size
      if (
        Math.abs(newW - prevWidth) < 2 &&
        Math.abs(newH - prevHeight) < 2
      ) {
        canvas.width = newW;
        canvas.height = newH;
        return;
      }

      // Genuine resize: compute scale and apply to stars
      const scaleX = newW / prevWidth;
      const scaleY = newH / prevHeight;

      width = canvas.width = newW;
      height = canvas.height = newH;

      stars.forEach((star) => {
        star.x *= scaleX;
        star.y *= scaleY;
      });

      prevWidth = newW;
      prevHeight = newH;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [starCount]);

  return (
    <div className="fixed inset-0 -z-50 bg-[#0a0e1a]">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
