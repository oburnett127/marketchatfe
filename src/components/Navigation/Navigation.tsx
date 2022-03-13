import React from 'react';
import { NavLink } from 'react-router-dom';
import mockAvatar from '../../images/mock-avatar.png';

function Navigation() {
  return (
    <nav className='py-5 px-16'>
      <ul className='flex gap-10 items-center text-xl'>
        <li>
          <NavLink to='/'>MarketChat</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Forum</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='ml-auto'>
          <NavLink to='signin'>Sign In</NavLink>
        </li>
        <li>
          <NavLink to='signup'>Sign Up</NavLink>
        </li>
        <li className='bg-blue-500 rounded-full h-12 w-12'>
          <NavLink to='/profile'>
            <img src={mockAvatar} alt='Mock User Avatar' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
