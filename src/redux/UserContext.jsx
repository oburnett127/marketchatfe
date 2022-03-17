import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  email: 'user@gmail.com',
  familyName: 'user',
  givenName: 'user',
  googleId: 'user',
  imageUrl: 'user',
  name: 'user',
});

const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const login = async (googleData) => {
    console.log(googleData);
    setUser(googleData.profileObj);

    // TODO: Send AJAX request to some backend server
    // const res = await fetch('/someServer', {
    //   method: 'POST',
    //   body: JSON.stringify({ token: googleData?.tokenId }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // const data = await res.json();
    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem('loginData');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default useUser;
