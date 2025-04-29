
import React, { useEffect, useRef } from 'react';

const FractalVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawFractal();
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    function drawFractal() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const phi = 1.618; // Golden ratio
      const size = Math.min(canvas.width, canvas.height) * 0.8;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw Fibonacci spiral
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
      
      let a = 0;
      let b = 1;
      let temp;
      let scale = size / 20;
      
      ctx.moveTo(centerX, centerY);
      
      for (let i = 0; i < 15; i++) {
        const radius = b * scale;
        const angle = i * 0.5 * Math.PI;
        const endX = centerX + radius * Math.cos(angle);
        const endY = centerY + radius * Math.sin(angle);
        
        ctx.lineTo(endX, endY);
        
        // Calculate next Fibonacci number
        temp = a;
        a = b;
        b = temp + b;
      }
      
      ctx.stroke();
      
      // Draw golden rectangles
      drawGoldenRectangles(centerX, centerY, size / 3);
    }
    
    function drawGoldenRectangles(x: number, y: number, size: number) {
      if (size < 5) return;
      
      const phi = 1.618;
      const width = size;
      const height = size / phi;
      
      ctx.beginPath();
      ctx.rect(x - width / 2, y - height / 2, width, height);
      ctx.strokeStyle = 'rgba(76, 175, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw smaller rectangle recursively
      const newSize = size / phi;
      drawGoldenRectangles(x - (width - newSize) / 2, y, newSize);
    }
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full rounded-lg golden-ratio" 
      style={{ minHeight: '300px' }}
    />
  );
};

export default FractalVisual;
