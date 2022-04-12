import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import * as mockData from '../../mockData';
import PostSelect from '../../components/PostSelect';
import PostPreview from './PostPreview';

function Posts() {
  // const [posts, setPosts] = useState([]);
  const [databasePosts, setDatabasePosts] = useState([]);

  // For Sorting / Filtering
  // TODO: Does this need to be a state, really? Or just an effect of posts?
  const [sortCriteria, setSortCriteria] = useState('date');

  // We'll programatically navigate when the outer div of a Post is clicked
  // This prevents React complaining about 'anchor inside of anchor'!
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((response) => response.json())
      .then((data) => setDatabasePosts(data))
      .catch((err) => console.log('Failed to fetch MongoDB users'));
  }, []);

  const addRandomPost = (event) => {
    const userRefList = [
      '6255df9f31f756e4bbc62ce3',
      '6255df8631f756e4bbc62ce1',
      '6255df6c31f756e4bbc62cdf',
      '6255df3d31f756e4bbc62cdd',
      '6255dee931f756e4bbc62cdb',
    ];

    const randomUserRef =
      userRefList[Math.floor(Math.random() * userRefList.length)];
    fetch(`http://localhost:5000/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({
        // author: mockData.getRandomAuthor(),
        author: randomUserRef,
        userRef: randomUserRef,
        title: mockData.getRandomTitle(),
        body: mockData.getRandomCommentBody(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = [...databasePosts, data];
        setDatabasePosts(updatedPosts);
      })
      .catch((error) => console.log('Error creating random comment: ', error));
  };

  const handleOnClick = (postID) => {
    // Navigate to a path relative to current one (don't add '/')
    navigate(`${postID}`);
  };

  const handleOnSortChange = (event) => {
    console.log(`Sorting by ${event.target.value}`);

    // Can't really do anything fancy by sorting every potential criteria using the same line of code (i.e b[criteria] - b[criteria])) because
    // some sorts require deeper logic than that. So we will just use a switch statement
    // let sortedPosts = posts;
    let sortedDatabasePosts = databasePosts;

    switch (event.target.value) {
      case 'comments':
        sortedDatabasePosts = [...databasePosts].sort(
          (a, b) => b.comments.length - a.comments.length
        );
        break;
      case 'comments-asc':
        sortedDatabasePosts = [...databasePosts].sort(
          (a, b) => a.comments.length - b.comments.length
        );
        break;
      case 'date':
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return (
            new moment(new Date(b.createdAt)) -
            new moment(new Date(a.createdAt))
          );
        });
        break;
      case 'date-asc':
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return (
            new moment(new Date(a.createdAt)) -
            new moment(new Date(b.createdAt))
          );
        });
        break;
      case 'author-asc':
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return a.author.toLowerCase() > b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() > a.author.toLowerCase()
            ? -1
            : 0;
        });
        break;
      case 'author':
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return a.author.toLowerCase() < b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() < a.author.toLowerCase()
            ? -1
            : 0;
        });
        break;
      case 'likes':
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return b.likes - a.likes;
        });
        break;
      case 'likes-asc':
        sortedDatabasePosts = [...databasePosts].sort((a, b) => {
          return a.likes - b.likes;
        });
        break;
      default:
        break;
    }

    setDatabasePosts(sortedDatabasePosts);
  };

  const handleOnVote = (postID, currentLikes, currentDislikes, delta) => {
    // Change vote count by delta
    fetch(`http://localhost:5000/api/posts/${postID}`, {
      method: 'PUT',
      body: JSON.stringify({
        // Why didn't we have to parse this for a Comment's Likes/Dislikes?!
        likes: delta > 0 ? parseInt(currentLikes) + 1 : parseInt(currentLikes),
        dislikes:
          delta < 0 ? parseInt(currentDislikes) + 1 : parseInt(currentDislikes),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDatabasePosts((posts) => {
          return posts.map((post) => (post._id === postID ? data : post));
        });
      })
      .catch((error) => console.log('Error Liking / Disliking: ', error));

    // TODO: Proper way to update the state of the Post now?
    // Should we just be updating
  };

  if (!databasePosts) return <div>Fetching Posts...</div>;

  return (
    <div className='min-h-screen px-4 text-center bg-slate-200 dark:bg-stone-900 text-neutral-900 dark:text-white'>
      <div className='m-auto max-w-screen-lg py-10'>
        <h1 className='text-3xl mb-10'>Posts (Message Board)</h1>
        <p className='mb-10'>
          Here we will see a list of Posts created by the community. There will
          also probably be a way to sort / filter posts by various criteria.
        </p>

        <PostSelect handleOnSortChange={handleOnSortChange} />

        <button
          onClick={addRandomPost}
          className='ml-10 mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg'
        >
          Create Random Post
        </button>

        <div className='flex flex-col gap-4 text-left my-6'>
          {databasePosts.map((post) => {
            return (
              <PostPreview
                key={post._id}
                post={post}
                handleOnClick={handleOnClick}
                handleOnVote={handleOnVote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
