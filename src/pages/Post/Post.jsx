import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as mockData from '../../mockData';
import Comment from '../../components/Comment/Comment';
import ReplyForm from '../../components/ReplyForm';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const textareaRef = useRef(null);

  // const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch Post from our own backend!
    // TODO: Proxy doesn't seem to be working -- it's using localhost:3000 even though I set to 5000!
    fetch(`http://localhost:5000/api/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
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

  const onHandleVote = (commentID, currentLikes, currentDislikes, delta) => {
    // Change vote count by delta
    fetch(`http://localhost:5000/api/comments/${commentID}`, {
      method: 'PUT',
      body: JSON.stringify({
        likes: delta > 0 ? currentLikes + 1 : currentLikes,
        dislikes: delta < 0 ? currentDislikes + 1 : currentDislikes,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPost((post) => ({
          ...post,
          comments: post.comments.map((comment) =>
            comment._id === commentID ? data : comment
          ),
        }));
        console.log(data);
      })
      .catch((error) => console.log('Error Liking / Disliking: ', error));

    // TODO: Proper way to update the state of the Post now?
    // Should we just be updating
  };

  const onHandleReplySubmit = (event, textareaRef) => {
    event.preventDefault();

    const replyBody = textareaRef.current.value;

    fetch(`http://localhost:5000/api/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        author: 'Epitome87',
        body: replyBody,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        textareaRef.current.value = '';
        setPost((post) => ({ ...post, comments: [...post.comments, data] }));
        console.log(data);
      })
      .catch((error) => console.log('Error creating user reply: ', error));
  };

  return (
    <div className='min-h-screen px-4 py-10 bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <div className='m-auto max-w-screen-lg'>
        {/* <h1 className='text-3xl mb-10 text-center'>
          Comments for Post with ID {postId}
        </h1> */}
        <div className='mb-10 p-4  dark:bg-stone-900'>
          <h2 className='mb-4 text-3xl font-bold'>{post && post.title}</h2>
          <p>{post && post.body}</p>
        </div>

        <button
          onClick={addRandomComment}
          className='ml-4 mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg'
        >
          Create Random Comment
        </button>

        <div className='pl-3'>
          <ReplyForm onHandleReplySubmit={onHandleReplySubmit} />
        </div>

        {/* List of Posts */}
        <div className='flex flex-col gap-8 text-left p-4 dark:bg-stone-900'>
          {post.comments &&
            post.comments.map((comment) => {
              return (
                <Comment
                  key={comment._id}
                  comment={comment}
                  onHandleVote={onHandleVote}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Post;
