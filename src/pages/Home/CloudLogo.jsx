import React from 'react';

function CloudLogo() {
  return (
    <div className='md:py-12 py-8 px-4'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold leading-10 dark:text-white text-gray-800'>
          Our Trusted Partners
        </h1>
        <p className='text-base leading-normal text-center text-gray-600 dark:text-gray-200 mt-4 xl:w-1/2 w-10/12'>
          We just got featured in the following magazines and it has been the most incredible journey. We work with the
          best stock magazines across the world
        </p>
      </div>
      <div className='flex items-between justify-center mt-10 border-x-fuchsia-500 border'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full'>
          <div className='md:w-48 w-full h-32 bg-gray-50 dark:bg-stone-800 flex items-center justify-center'>
            <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg1.svg' alt='google' />
          </div>
          <div className='md:w-48 w-full h-32 bg-gray-50 dark:bg-stone-800 flex items-center justify-center'>
            <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg2.svg' alt='dribble' />
          </div>
          <div className='md:w-48 w-full h-32 bg-gray-50 dark:bg-stone-800 flex items-center justify-center'>
            <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg3.svg' alt='amazon' />
          </div>
          <div className='md:w-48 w-full h-32 bg-gray-50 dark:bg-stone-800 flex items-center justify-center'>
            <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg4.svg' alt='linkedIn' />
          </div>
          <div className='md:w-48 w-full h-32 bg-gray-50 dark:bg-stone-800 flex items-center justify-center'>
            <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg5.svg' alt='blackberry' />
          </div>
          <div className='md:w-48 w-full h-32 bg-gray-50 dark:bg-stone-800 flex items-center justify-center'>
            <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg6.svg' alt='microsoft' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudLogo;
