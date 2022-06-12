import React, { useRef } from 'react';

function ReplyForm({ onHandleReplySubmit }) {
  const textareaRef = useRef(null);

  return (
    // TODO: Can make a message that is too short to pass backend validation, but it still goes through as blank
    // TODO: Fix that ^ !
    <div className='flex mx-auto items-center justify-center mt-2 mb-4 max-w-screen-lg rounded-xl text-center bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <form
        className='w-full max-w-screen-lg rounded-lg px-4 pt-2'
        onSubmit={(event) => onHandleReplySubmit(event, textareaRef)}
      >
        <div className='flex flex-wrap -mx-3 mb-6'>
          <h2 className='px-4 pt-3 pb-2 text-lg'>Add a new comment</h2>
          <div className='w-full md:w-full px-3 mb-2 mt-2'>
            <textarea
              ref={textareaRef}
              className='dark:text-neutral-900 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
              name='body'
              placeholder='What are your thoughts?'
              required
              minLength={10}
            ></textarea>
          </div>
          <div className='w-full md:w-full flex items-start px-3'>
            <div className='flex items-start w-1/2 text-gray-400 px-2 mr-auto'>
              <svg fill='none' className='w-5 h-5 text-gray-600 mr-1' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p className='text-xs md:text-sm pt-px'>10 character minimum.</p>
            </div>
            <div className='-mr-1'>
              <input
                type='submit'
                className='cursor-pointer bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100'
                value='Post Comment'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReplyForm;
