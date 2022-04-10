import React from 'react';
import Button from '../../components/NavButton/NavButton';
import heroBackground from '../../images/hero-bg.jpg';

function Home() {
  return (
    <main className='min-h-screen bg-white dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <div className='m-auto max-w-screen-lg'>
        <section className='text-left px-4 py-14 flex flex-wrap justify-between items-center'>
          <div className='w-5/12'>
            <h1 className='text-6xl my-6 font-bol'>Market Chat</h1>
            <p className='text-3xl'>A place for trading fanatics</p>
            <p className='mt-4 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              reprehenderit iusto incidunt?
            </p>
            <Button to='/posts'>Visit Forum</Button>
          </div>
          <img src={heroBackground} alt='' className='w-6/12 rounded-3xl' />
        </section>
      </div>

      {/* Maybe some explanatory section here */}
      <section className='text-white bg-blue-500 mt-10 px-4 py-20 text-left'>
        <div className='m-auto max-w-screen-lg'>
          <h2 className='text-4xl mb-6'>Lorem ipsum dolor sit.</h2>
          <p className='text-2xl mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia
            minima suscipit sequi cum aspernatur? Voluptatem recusandae quam
            odit rem!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            recusandae error enim ipsam magni soluta commodi voluptatibus dicta
            facere dolorum, illo non excepturi mollitia ullam.
          </p>
        </div>
      </section>

      {/* Maybe some section with a list of features */}
      <section className='px-4 py-20 text-neutral-900 dark:text-white'>
        <h3 className='text-4xl text-center mb-10'>What We Provide</h3>
        {/* Flexbox of cards */}
        <div className='flex flex-wrap gap-10 justify-center content-center'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg bg-neutral-200 dark:bg-neutral-900 transition duration-300 ease-in-out hover:scale-110'>
            <h4 className='font-bold text-xl py-3 bg-red-500 text-center'>
              Some Feature
            </h4>
            <div className='px-6 py-4'>
              <p className='text-neutral-900 dark:text-neutral-400 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg bg-neutral-200 dark:bg-neutral-900 transition duration-300 ease-in-out hover:scale-110'>
            <h4 className='font-bold text-xl py-3 bg-red-500 text-center'>
              Some Feature
            </h4>
            <div className='px-6 py-4'>
              <p className='text-neutral-900 dark:text-neutral-400 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className='max-w-sm rounded overflow-hidden shadow-lg bg-neutral-200 dark:bg-neutral-900 transition duration-300 ease-in-out hover:scale-110'>
            <h4 className='font-bold text-xl py-3 bg-red-500 text-center'>
              Some Feature
            </h4>
            <div className='px-6 py-4'>
              <p className='text-neutral-900 dark:text-neutral-400 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
