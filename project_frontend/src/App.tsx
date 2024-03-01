import React from 'react';
// Import BrowserRouter, Routes, and Route from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage'; // Example component, adjust the path as needed
import Register from './pages/Register'; // Example component, adjust the path as needed
import SignIn from './pages/Signin';


const App = () => {
  return (
    <Router>
      <div>
        {/* Setup your routes within Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
