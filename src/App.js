import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //shows spinner of blank while checking


  useEffect(() => {
    //onAuthStateChanged is firebase's built in listener
    //runs once page loads, watches for changes in login state
    //if someone is logged in, gives you a user object (email, UID etc.)
    //if not logged in, user is null
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); //updates user state with current user info
      setLoading(false); //done checking, ready to render app
    });
    return () => unsubscribe(); //clean up listener when component unmounts as we don't need at that point 
  }, []);


  if (loading) return <p>Loading...</p>;


  return (
    <ThemeProvider theme={theme}>
      {/* resets MUI base styles */}
      <CssBaseline />
      {/* set up router wrapper so we can using routing in the app */}
      <Router>
        <Routes>
          {/* Login Page route */}
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/dashboard' />} />
          {/* Signup Page route */}
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/dashboard' />} />
          {/* Dashboard route - redirects if user not logged in */}
          <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
          {/* catch all route - redirect to dashboard or login based on the login state */}
          <Route path='*' element={<Navigate to={user ? '/dashboard' : '/login'} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
