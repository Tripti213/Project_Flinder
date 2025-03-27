import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Rent from './Components/pages/rent';

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
      </Routes>
    </Router>
    </>
  );
}

export default App;