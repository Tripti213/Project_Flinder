import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Rent from './Components/pages/rent';
import SignUp from './Components/pages/SignUp';
import Login from './Components/pages/Login';
import Login2 from "./Components/pages/Login2";
import Choice from "./Components/pages/choice";
import Preferences from './Components/pages/preferences';
import Profile from './Components/pages/Profile';
import { UserProvider } from './Components/UserContext';
import Footer from './Components/Footer';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Flinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Description for Flinder " />
            </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/choice" element={<Choice />} />
          <Route 
            path="/preferences" 
            element={
              <ProtectedRoute>
                <Preferences />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;