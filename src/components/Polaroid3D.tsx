'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';

interface Polaroid3DProps {
  src: string;
  alt: string;
  initialRotation?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Polaroid3D({ src, alt, initialRotation = 0, className = '', style = {}, onClick }: Polaroid3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  // Map mouse position to rotation (tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);
  
  // Dynamic glare based on mouse position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareOpacity = useTransform(y, [-0.5, 0.5], [0.05, 0.25]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200, zIndex: isHovered ? 10 : 1 }}>
      <motion.div
        className={`photo-frame ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        initial={{ rotate: initialRotation }}
        animate={{ 
          rotate: isHovered ? 0 : initialRotation,
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -10 : 0,
          boxShadow: isHovered 
            ? '10px 20px 30px rgba(0,0,0,0.15)' 
            : '2px 4px 14px rgba(0,0,0,0.12)'
        }}
        style={{
          ...style,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          cursor: onClick ? 'zoom-in' : 'grab',
          position: 'relative'
        }}
        whileTap={{ scale: 0.98, cursor: onClick ? 'zoom-in' : 'grabbing' }}
      >
        {/* Floating Pin */}
        <div 
          className="pin" 
          style={{ 
            top: '-7px', 
            left: '50%', 
            marginLeft: '-7px', 
            transform: 'translateZ(30px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)'
          }} 
        />
        
        {/* Image Container */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          aspectRatio: '16/10', 
          background: '#e8e0d4', 
          overflow: 'hidden', 
          transform: 'translateZ(10px)' 
        }}>
          <Image 
            src={src} 
            alt={alt} 
            fill 
            style={{ objectFit: 'cover' }} 
            sizes="(max-width: 768px) 100vw, 50vw" 
          />
          
          {/* Dynamic Glare Overlay */}
          {isHovered && (
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)',
                opacity: glareOpacity,
                left: glareX,
                top: glareY,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                width: '200%',
                height: '200%'
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
