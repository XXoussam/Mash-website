import React, { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  targetValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({
  targetValue,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = 'text-3xl font-bold'
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCount();
      }
    }, { threshold: 0.1 });

    observer.current.observe(countRef.current);

    return () => {
      if (observer.current && countRef.current) {
        observer.current.unobserve(countRef.current);
      }
    };
  }, []);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = targetValue;
    const increment = endValue / (duration / 16);
    
    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      
      if (elapsedTime < duration) {
        const newCount = Math.min(
          Math.floor(startValue + increment * (elapsedTime / 16)),
          endValue
        );
        setCount(newCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={countRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CounterAnimation; 