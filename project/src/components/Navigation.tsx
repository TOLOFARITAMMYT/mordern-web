import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Animate backdrop fade in
      gsap.fromTo('.mobile-menu-backdrop', 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      // Animate menu slide in from right
      gsap.fromTo('.mobile-menu-panel', 
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );

      // Stagger animate menu items
      gsap.fromTo('.mobile-menu-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.15, ease: 'back.out(1.7)' }
      );

      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Home', 'Features', 'About', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <Zap className={`h-6 w-6 md:h-8 md:w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-lg sm:text-xl font-bold truncate ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ModernWeb
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500 transition-all duration-200 ${
                isOpen ? 'text-blue-600' : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="mobile-menu-backdrop fixed inset-0 bg-black/40 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="mobile-menu-panel md:hidden fixed right-0 top-0 h-screen w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col overflow-y-auto">
            {/* Menu Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-6 py-6 flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-menu-item block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;