import React from 'react';
import GoogleLogin from 'react-google-login';
import useUser from '../../redux/UserContext';

const SignIn = () => {
  const { user, login, logout } = useUser();

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    login(googleData);
  };

  const handleLogout = () => {
    logout();
  };

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className='min-h-screen px-44 text-center'>
      <h1 className='text-3xl mb-10'>Sign In to Market Chat!</h1>
      <div className='w-full max-w-xs mx-auto'>
        {user ? (
          <div>
            <h3>You are currently logged in as {user.email}</h3>
            <button
              onClick={handleLogout}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg my-10'
            >
              Logout
            </button>
          </div>
        ) : (
          <GoogleLogin
            clientId={googleClientId}
            buttonText='Log in with Google'
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
          />
        )}
      </div>
    </div>
  );
};

export default SignIn;
