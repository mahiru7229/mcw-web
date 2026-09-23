import React, { useEffect, useRef } from 'react';

export default function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0.3;
    let targetRotY = 0.6;
    let rotX = 0.3;
    let rotY = 0.6;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetRotY = x * 1.5;
      targetRotX = -y * 1.2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cube vertices (-1 to 1)
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    // Edges
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
    ];

    // Additional isometric grid lines inside cube (hologram look)
    const innerLines = [
      [-0.5, 0, 0, 0.5, 0, 0],
      [0, -0.5, 0, 0, 0.5, 0],
      [0, 0, -0.5, 0, 0, 0.5],
    ];

    // Particles floating around
    const particles = Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
      z: (Math.random() - 0.5) * 4,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.01 + 0.005,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      rotX += (targetRotX + Math.sin(time * 0.5) * 0.1 - rotX) * 0.05;
      rotY += (targetRotY + time * 0.2 - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.24;

      const project = ([x, y, z]) => {
        // Rotate around Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;

        // Rotate around X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Perspective projection
        const fov = 3.5;
        const pz = z2 + fov;
        const px = (x1 / pz) * scale * 2 + cx;
        const py = (y2 / pz) * scale * 2 + cy;
        return [px, py, z2];
      };

      // Draw floating glow particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -2) p.y = 2;
        const [px, py] = project([p.x, p.y, p.z]);
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${0.4 + Math.sin(time + p.x) * 0.3})`;
        ctx.fill();
      });

      // Project vertices
      const projected = vertices.map(project);

      // Draw cube edges with cyber neon glow
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#00f0ff';
      ctx.lineWidth = 2.5;

      edges.forEach(([i, j]) => {
        const [x1, y1] = projected[i];
        const [x2, y2] = projected[j];

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, '#00f0ff');
        gradient.addColorStop(0.5, '#a855f7');
        gradient.addColorStop(1, '#00ffaa');

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Draw inner glowing core
      const [coreX, coreY] = project([0, 0, 0]);
      const corePulse = Math.sin(time * 3) * 6 + 18;
      ctx.shadowBlur = 30;
      ctx.shadowColor = '#a855f7';
      ctx.fillStyle = 'rgba(168, 85, 247, 0.7)';
      ctx.beginPath();
      ctx.arc(coreX, coreY, corePulse, 0, Math.PI * 2);
      ctx.fill();

      // Reset shadow for performance
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent pointer-events-none z-10" />
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-xs font-mono text-cyan-400/60 bg-obsidian-900/80 px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm pointer-events-none">
        ◈ INTERACTIVE HOLOGRAPHIC CORE // MOVE CURSOR ◈
      </div>
    </div>
  );
}
