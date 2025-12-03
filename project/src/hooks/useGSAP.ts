import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // Enable smooth scrolling
      gsap.set('html', { scrollBehavior: 'smooth' });
      isInitialized.current = true;
    }

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return { gsap, ScrollTrigger };
};