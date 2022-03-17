import React from 'react';
import { NavLink } from 'react-router-dom';
import mockAvatar from '../../images/mock-avatar.png';
import useUser from '../../redux/UserContext';

const Navigation = () => {
  const { user, logout } = useUser();

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
