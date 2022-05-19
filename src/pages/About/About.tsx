import React from 'react';
import MemberCard from './MemberCard';

function About() {
  return (
    <div className='min-h-screen px-4 text-center bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <div className='m-auto max-w-screen-lg py-10'>
        <h1 className='text-3xl mb-10'>About Page</h1>
        <div className='p-8 bg-white dark:bg-stone-800 rounded-lg shadow'>
          <p className='text-center text-3xl font-bold text-gray-800 dark:text-white'>Professional team</p>
          <p className='text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200'>
            Meet the MarketChat Team!
          </p>
          <div className='flex items-center flex-col md:flex-row justify-evenly'>
            <MemberCard
              name='Matthew McGrath'
              role='Lead Developer'
              about='This is about Matthew'
              image='https://source.unsplash.com/random/900×700/?person'
            />
            <MemberCard
              name='Caitlin Gonzalez'
              role='Stuff Do-er'
              about='She did stuff, sure!'
              image='https://source.unsplash.com/random/900×800/?person'
            />
            <MemberCard
              name='Daniel McGrath'
              role='Stuff Do-er'
              about='He watched stuff being did!'
              image='https://source.unsplash.com/random/900×750/?person'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
