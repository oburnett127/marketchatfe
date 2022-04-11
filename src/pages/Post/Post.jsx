import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as mockData from '../../mockData';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  // const [comments, setComments] = useState([]);

  useEffect(() => {
    //   Fetch the comments for this post
    // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setComments(data);
    //     console.log(data);
    //   });

    // Fetch the post itself
    // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPost(data);
    //     console.log(data);
    //   });

    // Fetch Post from our own backend!
    // TODO: Proxy doesn't seem to be working -- it's using localhost:3000 even though I set to 5000!
    fetch(`http://localhost:5000/api/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => console.log('Error fetching Post with Comments', err));
  }, []);

  const addRandomComment = (event) => {
    fetch(`http://localhost:5000/api/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        author: mockData.getRandomAuthor(),
        body: mockData.getRandomCommentBody(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPost((post) => ({ ...post, comments: [...post.comments, data] }));
        console.log(data);
      })
      .catch((error) => console.log('Error creating random comment: ', error));
  };

  if (!post) {
    return <div>Fetching Post data...</div>;
  }

  return (
    <div className='min-h-screen px-4 bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <div className='m-auto max-w-screen-lg'>
        <h1 className='text-3xl mb-10 text-center'>
          Comments for Post with ID {postId}
        </h1>
        <div className='mb-10'>
          <h2 className='text-3xl font-bold'>{post && post.title}</h2>
          <p>{post && post.body}</p>
        </div>
        <button
          onClick={addRandomComment}
          className='mb-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg'
        >
          Create Random Comment
        </button>
        <div className='flex flex-col gap-6 text-left'>
          {post.comments &&
            post.comments.map((comment) => {
              return (
                <div className='border-l-2 border-l-cyan-500 '>
                  <h2 className='text-sm font-bold pl-4'>{comment.author}</h2>
                  <p className='pl-4'>{comment.body}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Post;
