import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Clients' },
    { icon: Award, value: '99%', label: 'Success Rate' },
    { icon: Target, value: '24/7', label: 'Support' }
  ];

  const benefits = [
    'Modern React & TypeScript architecture',
    'Responsive design for all devices',
    'GSAP animations and smooth interactions',
    'Tailwind CSS for rapid development',
    'SEO optimized and accessible',
    'Clean, maintainable code structure'
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate content sections
    gsap.fromTo('.about-content',
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.about-image',
      {
        x: 50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate stats
    gsap.fromTo('.stat-item',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="about-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence Since Day One
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in creating digital experiences that not only look beautiful but also perform flawlessly. 
              Our team combines cutting-edge technology with thoughtful design to deliver solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Visual/Stats */}
          <div className="about-image">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Impact</h3>
              <div className="stats-section grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 p-4 rounded-2xl">
                        <stat.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;