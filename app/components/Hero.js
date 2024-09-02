'use client';

import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import confetti from 'canvas-confetti';

const Hero = () => {
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

    const waitlistButtons = document.querySelectorAll('.waitlist-button');
    waitlistButtons.forEach(button => {
      button.addEventListener('click', handleWaitlistClick);
    });

    return () => {
      waitlistButtons.forEach(button => {
        button.removeEventListener('click', handleWaitlistClick);
      });
    };
  }, []);

  return (
    <div id="home" className={styles.heroContainer} style={{ backgroundImage: `url('/images/Screenshot_2024-09-02_015152-transformed.jpg')` }}>

      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-white">AI-Powered Study Plan Assistant</h1>
        <p className="text-xl mb-8 text-white">Revolutionize your learning with personalized AI guidance</p>
        <button className="waitlist-button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;