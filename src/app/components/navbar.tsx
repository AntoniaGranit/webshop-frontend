'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PottedPlant, UserCircle } from '@phosphor-icons/react';

const NavBar: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  let prevScrollPos = window.scrollY;

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout | null;
    return () => {
      clearTimeout(timeout as NodeJS.Timeout);
      timeout = setTimeout(() => func(), wait);
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

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavbarVisible]);

  return (
    <nav
      className={`navbar ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }
      fixed top-0 ml-auto w-full rounded-xl shadow-lg transition-transform duration-300 bg-emerald-200/90`}
    >
      <ul className='flex justify-between items-center p-6'>
        <li className=''>
          <Link href='/'>
            <PottedPlant size={30} className='text-emerald-900' />
          </Link>
        </li>
        <li>
          <Link href='/productlist' className='text-emerald-900 font-mono'>
            Plants
          </Link>
        </li>
        <li>
          <Link href='/about' className='text-emerald-900 font-mono'>
            About Us
          </Link>
        </li>
        <li>
          <Link href='/contact' className='text-emerald-900 font-mono'>
            Contact
          </Link>
        </li>
        <li>
          <UserCircle size={30} className='text-emerald-900' />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
