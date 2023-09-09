"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
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

    return (
      <nav className={`navbar ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 w-full bg-white shadow-lg transition-transform duration-300`}>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/productlist">Plants</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    )
  }
  
  export default NavBar