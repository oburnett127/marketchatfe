import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [databasePosts, setDatabasePosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch('http://localhost:5000/api/comments')
      .then((response) => response.json())
      .then((data) => setDatabasePosts(data));
  }, []);

  return (
    <div className='min-h-screen px-44 text-center bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <h1 className='text-3xl mb-10'>Posts (Message Board)</h1>
      <p className='mb-10'>
        Here we will see a list of Posts created by the community. There will
        also probably be a way to sort / filter posts by various criteria.
      </p>
      <div className='flex flex-col gap-6 text-left mb-6'>
        {databasePosts.map((post) => {
          return (
            <Link
              key={post.id}
              to={`/posts/${post._id}`}
              className='bg-blue-100 dark:bg-blue-900 p-4 rounded-lg border-solid border border-white hover:border-blue-500'
            >
              <div>
                <Link to={`/r/stocks`} className='font-bold'>
                  r/stocks
                </Link>{' '}
                <span className='text-gray-400 '>
                  Posted by{' '}
                  <Link
                    to={`/users/${post.author}`}
                    className='hover:underline'
                  >
                    {post.author}
                  </Link>{' '}
                </span>
                <span className='text-gray-400'>5 days ago</span>
              </div>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p className='py-2'>{post.body}</p>
              <Link
                to={`/posts/${post.id}`}
                className='p-1 rounded hover:bg-blue-200 dark:hover:bg-blue-600'
              >
                1 comment
              </Link>
            </Link>
          );
        })}
      </div>
      <div className='flex flex-col gap-6 text-left '>
        {posts.map((post) => {
          return (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className='bg-white dark:bg-zinc-700 p-4 rounded-lg border-solid border border-white hover:border-blue-500'
            >
              <div>
                <Link to={`/r/stocks`} className='font-bold'>
                  r/stocks
                </Link>{' '}
                <span className='text-gray-400 '>
                  Posted by{' '}
                  <Link to={`/users/someDude`} className='hover:underline'>
                    u/someDude
                  </Link>
                </span>
                <span className='text-gray-400'>5 days ago</span>
              </div>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p className='py-2'>{post.body}</p>
              <Link
                to={`/posts/${post.id}`}
                className='p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-500'
              >
                {Math.floor(Math.random() * 150)} comments
              </Link>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
