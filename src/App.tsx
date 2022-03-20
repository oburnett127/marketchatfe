import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Home, Post, Posts, Profile, SignIn, SignUp } from './pages/';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer';
import { UserProvider } from './redux/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:postId' element={<Post />} />
          <Route path='/users/' element={<div>Users</div>} />
          <Route
            path='/users/:userId'
            element={<Profile isOwnProfile={false} />}
          />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile isOwnProfile={true} />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
