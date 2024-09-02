'use client';

import { useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import confetti from 'canvas-confetti';

const Header = () => {
  useEffect(() => {
    const triggerConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    };

    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleWaitlistClick = (e) => {
      e.preventDefault();
      triggerConfetti();
      smoothScroll('#waitlist');
    };

    document.querySelectorAll('.waitlist-button').forEach(button => {
      button.addEventListener('click', handleWaitlistClick);
    });

    return () => {
      document.querySelectorAll('.waitlist-button').forEach(button => {
        button.removeEventListener('click', handleWaitlistClick);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-bar">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Code-a-Palooza</a>
        </div>
        
        {/* Navigation menu */}
        <nav className="flex-grow mx-8">
          <ul className="flex justify-center space-x-4">
            {['Home', 'Features', 'Join Waitlist', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`px-4 py-2 custom-button rounded-lg hover:opacity-80 transition-colors ${item === 'Join Waitlist' ? 'waitlist-button' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
   

      </div>
    </header>
  );
};

export default Header;