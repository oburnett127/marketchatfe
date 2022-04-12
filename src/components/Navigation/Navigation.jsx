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
      <div className='m-auto max-w-screen-lg'>
        <ul className='flex gap-10 items-center text-xl'>
          <li>
            <NavLink to='/' className='hover:border-blue-400 hover:border-b-4'>
              MarketChat
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/posts'
              className='hover:border-blue-400 hover:border-b-4'
            >
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='hover:border-blue-400 hover:border-b-4'
            >
              About
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <span onClick={() => setTheme(colorTheme)}>
              {colorTheme === 'light' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </svg>
              )}
            </span>
          </li>
          {!user ? (
            <li className='ml-auto leading-[0] '>
              <NavLink
                to='signin'
                className='border-blue-500   border-2 rounded-md px-4 pb-1 leading-[0]'
              >
                Sign In
              </NavLink>
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
      </div>
    </nav>
  );
};

export default Navigation;
