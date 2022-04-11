import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import * as mockData from '../../mockData';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [databasePosts, setDatabasePosts] = useState([]);

  // For Sorting / Filtering
  // TODO: Does this need to be a state, really? Or just an effect of posts?
  const [sortCriteria, setSortCriteria] = useState('date');

  // We'll programatically navigate when the outer div of a Post is clicked
  // This prevents React complaining about 'anchor inside of anchor'!
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const dataWithAdditions = data.map((post) => ({
          ...post,
          author: mockData.getRandomAuthor(),
          comments: mockData.createRandomComments(),
          createdAt: mockData.createRandomCreationDate(),
        }));
        setPosts(dataWithAdditions);
        // console.table(dataWithAdditions);
      });

    fetch('http://localhost:5000/api/posts')
      .then((response) => response.json())
      .then((data) => setDatabasePosts(data))
      .catch((err) => console.log('Failed to fetch MongoDB users'));
  }, []);

  const handleOnClick = (postID) => {
    // Navigate to a path relative to current one (don't add '/')
    navigate(`${postID}`);
  };

  const handleOnSortChange = (event) => {
    // setSortCriteria(event.target.value);

    console.log(`Sorting by ${event.target.value}`);

    // Can't really do anything fancy by sorting every potential criteria using the same line of code (i.e b[criteria] - b[criteria])) because
    // some sorts require deeper logic than that. So we will just use a switch statement
    let sortedPosts = posts;
    let sortedDatabasePosts = databasePosts;

    switch (event.target.value) {
      case 'comments':
        // setPosts((posts) =>
        //   [...posts].sort((a, b) => b.comments.length - a.comments.length)
        // );
        sortedPosts = [...posts].sort(
          (a, b) => b.comments.length - a.comments.length
        );

        sortedDatabasePosts = [...databasePosts].sort(
          (a, b) => b.comments.length - a.comments.length
        );
        break;
      case 'comments-asc':
        sortedPosts = [...posts].sort(
          (a, b) => a.comments.length - b.comments.length
        );
        sortedDatabasePosts = [...databasePosts].sort(
          (a, b) => a.comments.length - b.comments.length
        );
        break;
      case 'date':
        sortedPosts = [...posts].sort((a, b) => {
          return (
            new moment(b.createdAt).format('YYYYMMDD') -
            new moment(a.createdAt).format('YYYYMMDD')
          );
        });
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return (
            new moment(b.createdAt).format('YYYY-MM-DD') -
            new moment(a.createdAt).format('YYYY-MM-DD')
          );
        });
        break;
      case 'date-asc':
        sortedPosts = [...posts].sort((a, b) => {
          return (
            new moment(a.createdAt).format('YYYYMMDD') -
            new moment(b.createdAt).format('YYYYMMDD')
          );
        });
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return (
            new moment(a.createdAt).format('YYYY-MM-DD') -
            new moment(b.createdAt).format('YYYY-MM-DD')
          );
        });
        break;
      case 'author-asc':
        sortedPosts = [...posts].sort((a, b) => {
          return a.author.toLowerCase() > b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() > a.author.toLowerCase()
            ? -1
            : 0;
        });
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return a.author.toLowerCase() > b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() > a.author.toLowerCase()
            ? -1
            : 0;
        });
        break;
      case 'author':
        sortedPosts = [...posts].sort((a, b) => {
          return a.author.toLowerCase() < b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() < a.author.toLowerCase()
            ? -1
            : 0;
        });
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return a.author.toLowerCase() < b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() < a.author.toLowerCase()
            ? -1
            : 0;
        });
        break;
      default:
        break;
    }

    console.table(sortedDatabasePosts);
    console.table(sortedPosts);
    setPosts(sortedPosts);
    setDatabasePosts(sortedDatabasePosts);
  };

  if (!posts) return <div>Fetching Posts...</div>;

  return (
    <div className='min-h-screen px-4 text-center bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <div className='m-auto max-w-screen-lg'>
        <h1 className='text-3xl mb-10'>Posts (Message Board)</h1>
        <p className='mb-10'>
          Here we will see a list of Posts created by the community. There will
          also probably be a way to sort / filter posts by various criteria.
        </p>

        {/* Trying a Filtering feature */}
        <form className='inline-block relative w-64'>
          <label htmlFor='sort'>Sort</label>
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
          </select>
        </form>
        {/* End trying a Filtering feature */}

        <div className='flex flex-col gap-6 text-left mb-6'>
          {databasePosts.map((post) => {
            return (
              <div
                onClick={() => handleOnClick(post._id)}
                key={post._id}
                // to={`/posts/${post._id}`}
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
                  <span className='text-gray-400'>
                    {' '}
                    {/* {moment(post.createdAt, 'YYYYMMDD').fromNow()} */}
                    {/* {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')} */}
                    {moment(post.createdAt).calendar()}
                  </span>
                </div>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <p className='py-2'>{post.body}</p>
                <Link
                  to={`/posts/${post._id}`}
                  className='p-1 rounded hover:bg-blue-200 dark:hover:bg-blue-600'
                >
                  {post.comments.length} comments
                </Link>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col gap-6 text-left '>
          {posts.map((post) => {
            return (
              <div
                onClick={() => handleOnClick(post.id)}
                key={post.id}
                // to={`/posts/${post.id}`}
                className='bg-white dark:bg-zinc-700 p-4 rounded-lg border-solid border border-white hover:border-blue-500'
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
                      u/{post.author}
                    </Link>
                  </span>
                  <span className='text-gray-400'>
                    {' '}
                    {moment(post.createdAt, 'YYYYMMDD').fromNow()}
                  </span>
                </div>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <p className='py-2'>{post.body}</p>
                <Link
                  to={`/posts/${post.id}`}
                  className='p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-500'
                >
                  {post.comments.length} comments
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
