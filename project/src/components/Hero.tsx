import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([headlineRef.current, subheadlineRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });

    // Animation sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to(subheadlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Parallax background effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      if (parallax) {
        gsap.to(parallax, {
          y: scrolled * 0.5,
          duration: 0.1
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Build Amazing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Digital Experiences
          </span>
        </h1>

        <p
          ref={subheadlineRef}
          className="text-base sm:text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Create stunning websites and applications with modern technologies. 
          Fast, responsive, and built for the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            ref={buttonRef}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button className="group flex items-center space-x-2 text-white hover:text-blue-300 px-4 py-3 sm:px-6 sm:py-4 rounded-full border-2 border-white/30 hover:border-blue-300 transition-all duration-300 text-base">
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-lg">Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;