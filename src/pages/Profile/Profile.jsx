import React from 'react';
import useUser from '../../redux/UserContext';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className='min-h-screen px-44 text-center'>
      <h1 className='text-3xl mb-10'>Profile Page</h1>
      <p>
        Here the user can view / edit information such as his avatar image and
        name. The user can also see a history of their posts / comments?
      </p>
      {user && (
        <img
          src={user.imageUrl}
          alt={user.givenName}
          className='mx-auto w-32 my-6'
        />
      )}
      {user && <p>Username: {user.givenName}</p>}
    </div>
  );
};

export default Profile;
