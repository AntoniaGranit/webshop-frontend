import { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';

export const useScroll = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState<Boolean>(true);
    let prevScrollPos = window.scrollY;
  
  
    const debounce = (func: Function, wait: number) => {
      let timeout: NodeJS.Timeout | null;
      return (...args: any[]) => {
        clearTimeout(timeout as NodeJS.Timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  
      // Add a condition to check if the user has scrolled to the top of the page
      if (currentScrollPos < prevScrollPos) {
        setIsNavbarVisible(true);
      } else {
        // Scrolling down and navbar is visible
        setIsNavbarVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };
  
    const debouncedHandleScroll = debounce(handleScroll, 10);
    console.log(isNavbarVisible);
  
    useEffect(() => {
      window.addEventListener('scroll', debouncedHandleScroll);
      return () => {
        window.removeEventListener('scroll', debouncedHandleScroll);
      };
    }, [isNavbarVisible]);

  return isNavbarVisible;
};