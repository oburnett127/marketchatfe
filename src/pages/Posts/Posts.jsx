import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className='min-h-screen px-44 text-center'>
      <h1 className='text-3xl mb-10'>Posts (Message Board)</h1>
      <p className='mb-10'>
        Here we will see a list of Posts created by the community. There will
        also probably be a way to sort / filter posts by various criteria.
      </p>
      <div className='flex flex-col gap-6 text-left'>
        {posts.map((post) => {
          return (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className='p-4 border-solid border border-white hover:border-blue-500'
            >
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p>{post.body}</p>
              <p>{Math.floor(Math.random() * 150)} comments</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
