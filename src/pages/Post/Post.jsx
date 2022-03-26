import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    //   Fetch the comments for this post
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log(data);
      });

    // Fetch the post itself
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  }, []);

  return (
    <div className='min-h-screen px-44 bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <h1 className='text-3xl mb-10 text-center'>
        Comments for Post with ID {postId}
      </h1>
      <div className='mb-10'>
        <h2 className='text-3xl font-bold'>{post && post.title}</h2>
        <p>{post && post.body}</p>
      </div>
      <div className='flex flex-col gap-6 text-left'>
        {comments.map((post) => {
          return (
            <div className='border-l-2 '>
              <h2 className='text-sm font-bold pl-4'>{post.email}</h2>
              <p className='pl-4'>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
