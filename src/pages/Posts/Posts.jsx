import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

const mockUsers = [
  'sugarsnuffle',
  'vineail',
  'brawnymute',
  'dodgeballwidely',
  'feistyexhibition',
  'woofcroquet',
  'flaxseedcomet',
  'lawonerous',
  'strongbegan',
  'erstmystery',
  'bulletgrounded',
  'ailservice',
  'relybeans',
  'centerden',
  'trialyourself',
  'claimconclude',
  'readmainly',
  'decreasingslacks',
  'inbornconspiracy',
  'draconianimportant',
  'pageantryelytra',
  'truthfuzzy',
  'variouscuddly',
  'undergoevening',
  'cottonpurpur',
  'canceldeparture',
  'excellentsignal',
  'poursmirk',
  'panzebra',
  'bloathoop',
  'fatherlethargic',
  'weepingmilky',
  'garboardabstracted',
  'doofuscollected',
  'irritatedinning',
  'comeclove',
  'wageflint',
  'cellwimp',
  'stripedrent',
  'poopspring',
  'enchiladafaulty',
  'onionscoffle',
  'querulousregional',
  'treblewander',
  'unlockpatsy',
  'divorcesunbonnet',
  'worseimpartial',
  'barksecond',
  'rejectkind',
  'reliablelard',
];

const mockCommentList = [
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ratione.',
  'Lorem, ipsum dolor.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio modi nisi facilis eligendi nobis!',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam nesciunt.',
];

const createRandomAuthor = () => {
  return mockUsers[Math.floor(Math.random() * mockUsers.length)];
};

const createRandomComments = () => {
  const numRandomComments = Math.floor(Math.random() * 100);
  const randomComments = [];

  for (let i = 0; i < numRandomComments; i++) {
    randomComments.push(Math.floor(Math.random() * mockCommentList.length));
  }

  return randomComments;
};

const createRandomCreationDate = () => {
  const year = 2022; // Keep it simple!
  const randomMonth = Math.floor(Math.random() * 4) + 1;
  const randomDay = Math.floor(Math.random() * 9) + 1;

  const randomDateString = `${year}${('0' + randomMonth).slice(-2)}${(
    '0' + randomDay
  ).slice(-2)}`;

  return randomDateString;
};

function Posts() {
  const [posts, setPosts] = useState([]);
  const [databasePosts, setDatabasePosts] = useState([]);

  // For Sorting / Filtering
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
          author: createRandomAuthor(),
          comments: createRandomComments(),
          creationDate: createRandomCreationDate(),
        }));
        setPosts(dataWithAdditions);
        console.table(dataWithAdditions);
      });

    fetch('http://localhost:5000/api/comments')
      .then((response) => response.json())
      .then((data) => setDatabasePosts(data))
      .catch((err) => console.log('Failed to fetch MongoDB users'));
  }, []);

  const handleOnClick = (postID) => {
    // Navigate to a path relative to current one (don't add '/')
    navigate(`${postID}`);
  };

  const handleOnSortChange = (event) => {
    // TODO: Does this need to be a state, really?
    setSortCriteria(event.target.value);

    console.log(`Sorting by ${event.target.value}`);

    // Can't really do anything fancy by sorting every potential criteria using the same line of code (i.e b[criteria] - b[criteria])) because
    // some sorts require deeper logic than that. So we will just use a switch statement
    let sortedPosts = posts;

    switch (event.target.value) {
      case 'comments':
        sortedPosts = posts.sort((a, b) => {
          return b.comments.length - a.comments.length;
        });
        console.log('Sorted by Comments - Most!');
        break;
      case 'comments-asc':
        sortedPosts = posts.sort((a, b) => {
          return a.comments.length - b.comments.length;
        });
        console.log('Sorted by Comments - Least!');
        break;
      case 'date':
        posts.sort((a, b) => {
          return (
            new moment(b.creationDate).format('YYYYMMDD') -
            new moment(a.creationDate).format('YYYYMMDD')
          );
        });
        console.log('Sorted by Date - Descending!');
        break;
      case 'date-asc':
        posts.sort((a, b) => {
          return (
            new moment(a.creationDate).format('YYYYMMDD') -
            new moment(b.creationDate).format('YYYYMMDD')
          );
        });
        console.log('Sorted by Date - Ascending!');
        break;
      case 'author-asc':
        posts.sort((a, b) => {
          return a.author > b.author ? 1 : b.author > a.author ? -1 : 0;
        });
        console.log('Sorted by Author - Ascending!');
        break;
      case 'author':
        posts.sort((a, b) => {
          return a.author < b.author ? 1 : b.author < a.author ? -1 : 0;
        });
        console.log('Sorted by Author - Descending!');
        break;
      default:
        break;
    }

    console.table(sortedPosts);

    setPosts(sortedPosts);
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
                onClick={() => handleOnClick(post.id)}
                key={post.id}
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
                    {moment(post.creationDate, 'YYYYMMDD').fromNow()}
                  </span>
                </div>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <p className='py-2'>{post.body}</p>
                <Link
                  to={`/posts/${post.id}`}
                  className='p-1 rounded hover:bg-blue-200 dark:hover:bg-blue-600'
                >
                  1 comment
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
                    {moment(post.creationDate, 'YYYYMMDD').fromNow()}
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
