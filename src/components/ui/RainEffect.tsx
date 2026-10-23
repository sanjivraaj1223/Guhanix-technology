import { useEffect, useRef } from 'react';

interface Drop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
  color: string;
}

const COLORS = [
  'rgba(8,123,255,',   // electric blue
  'rgba(34,211,255,',  // cyan
  'rgba(255,106,0,',   // orange (rare)
];

export default function RainEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const drops: Drop[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Spawn initial drops
    const spawnDrop = (): Drop => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * -canvas.height,
      length:  10 + Math.random() * 60,
      speed:   2 + Math.random() * 5,
      opacity: 0.06 + Math.random() * 0.18,
      width:   0.4 + Math.random() * 0.8,
      color:   COLORS[Math.random() < 0.85 ? (Math.random() < 0.6 ? 0 : 1) : 2],
    });

    for (let i = 0; i < 120; i++) {
      const d = spawnDrop();
      d.y = Math.random() * canvas.height; // distribute on first frame
      drops.push(d);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of drops) {
        // Draw streak
        const grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.length);
        grad.addColorStop(0, `${d.color}0)`);
        grad.addColorStop(0.5, `${d.color}${d.opacity})`);
        grad.addColorStop(1, `${d.color}0)`);

        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = d.width;
        ctx.stroke();

        // Tiny glow dot at bottom of streak
        ctx.beginPath();
        ctx.arc(d.x, d.y + d.length, d.width * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${d.color}${d.opacity * 0.8})`;
        ctx.fill();

        // Move
        d.y += d.speed;

        // Reset when off-screen
        if (d.y > canvas.height + d.length) {
          d.x       = Math.random() * canvas.width;
          d.y       = -d.length;
          d.speed   = 2 + Math.random() * 5;
          d.length  = 10 + Math.random() * 60;
          d.opacity = 0.06 + Math.random() * 0.18;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
}
