import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
  speed?: number;
  density?: number;
  fontSize?: number;
  color?: string;
  opacity?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  className = '',
  speed = 50, // Increased speed value to slow down animation
  density = 0.85, // Reduced density for fewer characters
  fontSize = 14,
  color = '#00FF41',
  opacity = 0.05 // Reduced opacity for subtlety
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '01';
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    // Animation frame
    let animationFrame: number;
    let lastDraw = 0;

    const draw = (timestamp: number) => {
      // Only update every 'speed' milliseconds
      if (timestamp - lastDraw < speed) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }
      
      lastDraw = timestamp;
      
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > density) continue;

        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.99) { // Reduced reset probability
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [fontSize, speed, density, color, opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
      style={{ background: 'black' }}
    />
  );
};

export default MatrixRain;