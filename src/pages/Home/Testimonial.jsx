import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
  return (
    <div>
      <h2 className='text-2xl leading-6 text-gray-800 dark:text-white   text-center px-4'>Testimonials</h2>
      <h1 className='md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 dark:text-white   mt-6 text-center'>
        What our customers says
      </h1>
      <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6'>
        <TestimonialCard
          name='Matthew McGrath'
          role='Developer'
        />
        <TestimonialCard name='Caitlin Gonzalez' />
        <TestimonialCard name='Daniel McGrath' />
      </div>
    </div>
  );
}

export default Testimonial;
