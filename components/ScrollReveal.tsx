
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: 'up' | 'left' | 'right' | 'none';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1, // Trigger slightly earlier
        rootMargin: '20px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        // Reduced translation distance for a tighter, faster feel
        case 'up': return 'translate-y-10 scale-[0.96]'; 
        case 'left': return '-translate-x-10';
        case 'right': return 'translate-x-10';
        default: return 'scale-[0.96]';
      }
    }
    return 'translate-y-0 translate-x-0 scale-100';
  };

  const transitionDelay = `${delay}ms`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay }}
      className={`transition-all duration-700 ease-out-expo transform ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[2px]'
      } ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
