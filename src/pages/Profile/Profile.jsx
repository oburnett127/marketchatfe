import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../../redux/UserContext';

const Profile = ({ isOwnProfile }) => {
  const { userId: id } = useParams();
  const { user } = useUser();
  const [databaseUser, setDatabaseUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDatabaseUser(data));
  }, [id]);

  if (!isOwnProfile && !databaseUser) return <div>Nothing to see here!</div>;

  const renderedFavoriteStocks = databaseUser ? (
    databaseUser.favoriteStocks.map((stock) => {
      return <p key={stock}>{stock}</p>;
    })
  ) : (
    <div>No database user fetched</div>
  );

  const renderedHeader = isOwnProfile ? (
    <div>
      <h1>This is Your Profile Page</h1>
      <p>
        Here the user can view / edit information such as his avatar image and
        name. The user can also see a history of their posts / comments?
      </p>
    </div>
  ) : (
    <h1>You Are Viewing a User's Profile</h1>
  );

  return (
    <div className='min-h-screen px-44 text-center'>
      <h1 className='text-3xl mb-10'>{renderedHeader}</h1>

      {user && (
        <img
          src={user.imageUrl}
          alt={user.givenName}
          className='mx-auto w-32 my-6'
        />
      )}
      {user && <p>Username: {user.givenName}</p>}

      {databaseUser && (
        <img
          src={databaseUser.imageUrl}
          alt={databaseUser.username}
          className='mx-auto w-32 my-6'
        />
      )}
      {databaseUser && <p>Username: {databaseUser.username}</p>}
      {databaseUser && <p>Name: {databaseUser.name}</p>}
      {databaseUser && (
        <div className='flex flex-col'>
          <h3>Favorite Stocks</h3>
          {renderedFavoriteStocks}
        </div>
      )}
    </div>
  );
};

export default Profile;
