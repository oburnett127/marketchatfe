import React from 'react';
import Button from '../../components/NavButton/NavButton';

function Home() {
  return (
    <main>
      <section className='text-center px-44'>
        <h1 className='text-6xl my-6'>Market Chat</h1>
        <p className='text-3xl'>A place for trading fanatics</p>
        <p className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          reprehenderit iusto incidunt?
        </p>
        <Button to='/posts'>Posts</Button>
      </section>

      {/* Maybe some explanatory section here */}
      <section className='bg-blue-500 mt-10 px-44 py-20'>
        <h2 className='text-4xl'>Lorem ipsum dolor sit.</h2>
        <p className='text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia
          minima suscipit sequi cum aspernatur? Voluptatem recusandae quam odit
          rem!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          recusandae error enim ipsam magni soluta commodi voluptatibus dicta
          facere dolorum, illo non excepturi mollitia ullam.
        </p>
      </section>
    </main>
  );
}

export default Home;
