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
import Swipe from "./Components/pages/Swipe";
import Preferences from './Components/pages/preferences';

function App() {
  return (
    <>
  
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
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;