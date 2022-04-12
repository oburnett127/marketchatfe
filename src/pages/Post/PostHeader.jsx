import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostHeader({ post }) {
  return (
    <div className=''>
      <Link to={`/r/stocks`} className='font-bold'>
        r/stocks
      </Link>{' '}
      <span className='text-gray-400 '>
        Posted by{' '}
        <Link to={`/users/${post.author}`} className='hover:underline'>
          {post.author}
        </Link>{' '}
      </span>
      <span className='text-gray-400'>
        {' '}
        {moment(post.createdAt).calendar()}
      </span>
    </div>
  );
}

export default PostHeader;
