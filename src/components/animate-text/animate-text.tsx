import React, { useState, useEffect } from 'react';
import "./animate-text.css"

interface AnimatedTextProps {
  animationClass: string;
  children: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ animationClass, children }) => {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const element = document.querySelector('.animated-element');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        setAnimated(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
      <div className={`animated-element ${animationClass} ${animated ? 'animate' : ''}`}>{children}</div>
    
  );
};

export default AnimatedText;