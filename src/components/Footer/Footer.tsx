import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='text-center py-5 px-16 bg-white dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <h6>
        MarketChat <span>&copy; 2022</span>
      </h6>
      <ul className='flex gap-10 items-center justify-center text-md'>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/'>Team</NavLink>
        </li>
        <li>
          <NavLink to='/'>Contact Us</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
