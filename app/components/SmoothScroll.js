'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash) {
        e.preventDefault();
        smoothScroll(target.hash);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;