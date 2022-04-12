import React from 'react';
import moment from 'moment';
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti';

function Comment({ comment, onHandleVote, onClickReply }) {
  const handleClickReply = (commentID) => {
    onClickReply(commentID);
  };

  return (
    <div className='border-l-2 border-l-blue-500 dark:bg-stone-900 py-2'>
      <div className='flex flex-row gap-4 pl-4 items-center'>
        <div className='inline-block rounded-full bg-blue-500 w-8 h-8 overflow-hidden'>
          <img
            src={`${comment.userRef ? comment.userRef.imageURL : ''}`}
            alt=''
          />
        </div>
        <span className='text-md font-bold'>
          {comment.userRef ? comment.userRef.username : 'Unknown'}
        </span>
        <span className='text-gray-400'>
          {' '}
          {moment(comment.createdAt).fromNow()}
        </span>
      </div>
      <p className='pl-4 my-3'>{comment.body}</p>
      <div className='pl-4 flex flex-row items-center'>
        <TiArrowUpOutline
          // onMouseOver={({ target }) =>
          //   (target.style.color = 'yellow')
          // }
          className='cursor-pointer hover:text-blue-400'
          size={25}
          onClick={() =>
            onHandleVote(comment._id, comment.likes, comment.dislikes, 1)
          }
        />
        <span className='ml-1'>{comment.likes}</span>
        <TiArrowDownOutline
          size={25}
          className='cursor-pointer hover:text-red-400 ml-6'
          onClick={() =>
            onHandleVote(comment._id, comment.likes, comment.dislikes, -1)
          }
        />
        <span className='ml-1'>{comment.dislikes}</span>
        <p
          className='cursor-pointer ml-6 rounded hover:bg-blue-100 dark:hover:bg-stone-700 py-2 px-2'
          onClick={() => handleClickReply(comment._id)}
        >
          Reply
        </p>
      </div>
    </div>
  );
}

export default Comment;
