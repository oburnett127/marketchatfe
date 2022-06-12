import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti';
import { IoChatboxOutline } from 'react-icons/io5';
import { HiOutlineSave } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { BiHide } from 'react-icons/bi';
import PostHeader from '../Post/PostHeader';

function PostPreview({ post, handleOnClick, handleOnVote }) {
  console.log('POST', post);

  const sigh = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log('POST', post);
    handleOnVote(post._id, post.likes, post.dislikes, 1);
  };
  return (
    <div
      onClick={() => handleOnClick(post._id)}
      className='overflow-hidden flex items-stretch cursor-pointer bg-white dark:bg-stone-800 rounded-lg border-solid border border-stone-400 hover:border-stone-100 drop-shadow-2xl'
    >
      {/* Side Voting Bar */}
      <div className='bg-slate-200 dark:text-white dark:bg-zinc-900 flex flex-col items-center gap-1 pb-2 pt-4 px-1 text-md'>
        {/* <div>{post.likes}</div> */}
        <TiArrowUpOutline size={25} className='cursor-pointer hover:text-blue-400' onClick={sigh} />
        {/* Show "Vote" until you've placed a vote */}
        {/* <div>Vote</div> */}
        <div>{post.likes}</div>
        <TiArrowDownOutline
          size={25}
          className='cursor-pointer hover:text-red-400'
          onClick={(event) => {
            event.stopPropagation();
            handleOnVote(post._id, post.likes, post.dislikes, -1);
          }}
        />
        {/* We maybe shouldn't show Dislikes! */}
        {/* <div>{post.dislikes}</div> */}
      </div>

      <div className='py-2 px-2 truncate flex-grow'>
        <div className='flex flex-col justify-between min-h-full'>
          <div className='px-2'>
            <PostHeader post={post} />
            <h2 className='my-2 text-xl font-bold'>{post.title}</h2>
            <p className='truncate'>{post.body}</p>
          </div>

          <div className='flex flex-row items-center gap-2 mt-1 py-2 px-2 text-gray-400'>
            <Link
              to={`/posts/${post._id}`}
              className='inline-flex items-center gap-2 rounded py-2 px-2 hover:bg-blue-100 dark:hover:bg-stone-700'
            >
              <IoChatboxOutline size={25} />
              <p>{post.comments.length} comments</p>
            </Link>
            <div className='flex items-center gap-2 rounded py-2 px-2 hover:bg-blue-100 dark:hover:bg-stone-700'>
              <RiShareForwardFill size={25} className='ml-auto' />
              <p>Share</p>
            </div>
            <div className='flex items-center gap-2 rounded py-2 px-2 hover:bg-blue-100 dark:hover:bg-stone-700'>
              <HiOutlineSave size={25} />
              <p>Save</p>
            </div>
            <div className='flex items-center gap-2 rounded py-2 px-2 hover:bg-blue-100 dark:hover:bg-stone-700'>
              <BiHide size={25} />
              <p>Block</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
