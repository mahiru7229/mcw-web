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

    // Particles floating around in tactical flame colors
    const particles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
      z: (Math.random() - 0.5) * 4,
      size: Math.random() * 2.2 + 1,
      speed: Math.random() * 0.012 + 0.006,
      color: Math.random() > 0.4 ? '#ff1f44' : '#ff7b00',
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      rotX += (targetRotX + Math.sin(time * 0.5) * 0.1 - rotX) * 0.05;
      rotY += (targetRotY + time * 0.2 - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.25;

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

      // Draw floating flame particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -2) p.y = 2;
        const [px, py] = project([p.x, p.y, p.z]);
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5 + Math.sin(time + p.x) * 0.3;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Project vertices
      const projected = vertices.map(project);

      // Draw cube edges with cyber flame/crimson glow
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#ff1f44';
      ctx.lineWidth = 2.4;

      edges.forEach(([i, j]) => {
        const [x1, y1] = projected[i];
        const [x2, y2] = projected[j];

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, '#ff1f44');
        gradient.addColorStop(0.5, '#ff5400');
        gradient.addColorStop(1, '#ffb703');

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Draw inner glowing core (Instance Matrix Sync)
      const [coreX, coreY] = project([0, 0, 0]);
      const corePulse = Math.sin(time * 3) * 6 + 18;
      ctx.shadowBlur = 32;
      ctx.shadowColor = '#ff1f44';
      ctx.fillStyle = 'rgba(255, 31, 68, 0.75)';
      ctx.beginPath();
      ctx.arc(coreX, coreY, corePulse, 0, Math.PI * 2);
      ctx.fill();

      // Vertex dots
      projected.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffb703';
        ctx.fill();
      });

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
    <div className="relative w-full h-[320px] sm:h-[350px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent pointer-events-none z-10" />
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[11px] font-mono text-asuka-flame bg-obsidian-900/90 px-3 py-1 rounded-full border border-asuka-red/30 backdrop-blur-sm pointer-events-none">
        ◈ 3D TACTICAL CORE // INTERACTIVE ◈
      </div>
    </div>
  );
}
