import React, { useEffect, useRef } from 'react';

export default function AtmosphereCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Stars
    const starCount = width < 768 ? 40 : 85;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.6 ? '#72D8FF' : Math.random() > 0.4 ? '#8B8FF8' : '#F0A7D8',
    }));

    // Floating 3D Voxel Cubes (Slow, peaceful anime atmosphere)
    const cubeCount = width < 768 ? 4 : 8;
    const cubes = Array.from({ length: cubeCount }, () => ({
      x: (Math.random() - 0.5) * width * 0.8,
      y: (Math.random() - 0.5) * height * 0.8,
      z: Math.random() * 500 + 200,
      size: Math.random() * 20 + 16,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedX: (Math.random() - 0.5) * 0.003,
      speedY: (Math.random() - 0.5) * 0.003,
      floatSpeed: Math.random() * 0.2 + 0.1,
      color: Math.random() > 0.5 ? 'rgba(114, 216, 255, 0.15)' : 'rgba(139, 143, 248, 0.15)',
      borderColor: Math.random() > 0.5 ? 'rgba(114, 216, 255, 0.35)' : 'rgba(139, 143, 248, 0.35)',
    }));

    // Rare shooting star
    let shootingStar = null;
    let shootingStarTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Soft atmospheric twilight aurora in background
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.15, 10, width * 0.2, height * 0.15, width * 0.45);
      grad1.addColorStop(0, 'rgba(139, 143, 248, 0.08)');
      grad1.addColorStop(0.5, 'rgba(114, 216, 255, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.35, 10, width * 0.8, height * 0.35, width * 0.4);
      grad2.addColorStop(0, 'rgba(240, 167, 216, 0.06)');
      grad2.addColorStop(0.6, 'rgba(111, 229, 156, 0.03)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Stars
      for (const s of stars) {
        if (!prefersReducedMotion) {
          s.alpha += Math.sin(Date.now() * s.speed) * 0.005;
          s.alpha = Math.max(0.1, Math.min(0.9, s.alpha));
        }
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // 3. Rare Shooting Star
      shootingStarTimer++;
      if (!prefersReducedMotion && shootingStarTimer > 400 && !shootingStar && Math.random() < 0.02) {
        shootingStar = {
          x: Math.random() * width * 0.8,
          y: Math.random() * (height * 0.4),
          len: Math.random() * 80 + 50,
          speed: Math.random() * 6 + 7,
          opacity: 1,
        };
        shootingStarTimer = 0;
      }

      if (shootingStar) {
        ctx.save();
        ctx.strokeStyle = `rgba(114, 216, 255, ${shootingStar.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.len, shootingStar.y + shootingStar.len * 0.6);
        ctx.stroke();
        ctx.restore();

        shootingStar.x += shootingStar.speed;
        shootingStar.y -= shootingStar.speed * 0.6;
        shootingStar.opacity -= 0.02;

        if (shootingStar.opacity <= 0) {
          shootingStar = null;
        }
      }

      // 4. Floating Voxel Cubes
      for (const cube of cubes) {
        if (!prefersReducedMotion) {
          cube.rotX += cube.speedX;
          cube.rotY += cube.speedY;
          cube.y -= cube.floatSpeed;
          if (cube.y < -height * 0.6) {
            cube.y = height * 0.6;
            cube.x = (Math.random() - 0.5) * width * 0.8;
          }
        }

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + cube.z);
        const cx = width / 2 + cube.x * scale;
        const cy = height / 2 + cube.y * scale;
        const size = cube.size * scale;

        ctx.save();
        ctx.translate(cx, cy);

        // Simple stylized isometric voxel square/cube
        ctx.fillStyle = cube.color;
        ctx.strokeStyle = cube.borderColor;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.rect(-size / 2, -size / 2, size, size);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
