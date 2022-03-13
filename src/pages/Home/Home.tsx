import React from 'react';
import Button from '../../components/NavButton/NavButton';

function Home() {
  return (
    <div>
      <h1>This is the Home page</h1>
      <p>
        Here we will see a landing section of some sort, as well as a location
        for the user to sign in
      </p>
      <div className='flex flex-wrap gap-2'>
        <Button to='/'>Go Home</Button>
        <Button to='/about'>About</Button>
        <Button to='/profile'>Profile</Button>
        <Button to='/signin'>Sign In</Button>
        <Button to='/signup'>Sign Up</Button>
        <Button to='/posts'>Posts</Button>
      </div>
    </div>
  );
}

export default Home;
