import React, { useEffect, useRef } from 'react';
import { Zap, Shield, Smartphone, Globe, Palette, Code } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern technologies for blazing fast load times and smooth interactions.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable infrastructure to protect your data and users.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that looks perfect on all devices, from smartphones to desktop computers.'
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Internationalization support and CDN delivery for optimal performance worldwide.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Stunning visual design with smooth animations and intuitive user experience.'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices and standards.'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate feature cards
    gsap.fromTo('.feature-card', 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Title animation
    gsap.fromTo('.features-title',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="features" ref={sectionRef} className="w-full py-12 sm:py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="features-title text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="features-title text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover the features that make our platform the perfect choice for your next project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;