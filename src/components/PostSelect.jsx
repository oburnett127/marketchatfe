import React from 'react';

function PostSelect({ handleOnSortChange }) {
  return (
    <form className='inline-block relative w-64'>
      {/* <label htmlFor='sort'>Sort</label> */}
      <select
        name='sort'
        id='sort'
        className='block appearance-none w-full text-neutral-900 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        onChange={handleOnSortChange}
      >
        <option
          value='date'
          className='text-neutral-900 dark:text-white'
          style={{
            color: 'black',
          }}
        >
          Date - Newest
        </option>
        <option
          value='date-asc'
          style={{
            color: 'black',
          }}
        >
          Date - Oldest
        </option>
        <option
          value='comments'
          style={{
            color: 'black',
          }}
        >
          Comments - Most
        </option>
        <option
          value='comments-asc'
          style={{
            color: 'black',
          }}
        >
          Comments - Least
        </option>
        <option
          value='author-asc'
          className='text-neutral-900 dark:text-white'
          style={{
            color: 'black',
          }}
        >
          Author - Ascending
        </option>
        <option
          value='author'
          className='text-neutral-900 dark:text-white'
          style={{
            color: 'black',
          }}
        >
          Author - Descending
        </option>
        <option
          value='likes'
          className='text-neutral-900 dark:text-white'
          style={{
            color: 'black',
          }}
        >
          Likes - Most
        </option>
        <option
          value='likes-asc'
          className='text-neutral-900 dark:text-white'
          style={{
            color: 'black',
          }}
        >
          Likes - Least
        </option>
      </select>
    </form>
  );
}

export default PostSelect;
