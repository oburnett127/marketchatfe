import React from 'react';
import { Link } from 'react-router-dom';

export interface INavButtonProps {
  to: string;
  children: React.ReactChild;
}

const NavButton: React.FC<INavButtonProps> = ({ to, children }) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md shadow-stone-900'>
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default NavButton;
