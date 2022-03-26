import React from 'react';
import { NavLink } from 'react-router-dom';
import mockAvatar from '../../images/mock-avatar.png';
import useUser from '../../redux/UserContext';
import useDarkMode from '../../hooks/useDarkMode';

const Navigation = () => {
  const { user, logout } = useUser();
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className='py-5 px-16 bg-white dark:bg-stone-900 text-neutral-900 dark:text-white'>
      {/* TRYING LIGHT DARK MODE TOGGLE */}
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
        <li>
          <div>
            <span onClick={() => setTheme(colorTheme)}>
              {colorTheme === 'light' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </svg>
              )}
            </span>
          </div>
        </li>
        {!user ? (
          <li className='ml-auto'>
            <NavLink to='signin'>Sign In</NavLink>
          </li>
        ) : (
          <li className='ml-auto'>
            <button
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </button>
          </li>
        )}
        {user && (
          <li className='bg-blue-500 rounded-full h-12 w-12'>
            <NavLink to='/profile'>
              <img
                src={user ? user.imageUrl : mockAvatar}
                alt='Mock User Avatar'
                className='rounded-full'
              />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
