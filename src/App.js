import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import JobSpecial from './components/jobApplication/JobSpecial.jsx';
import SignIn from './components/userAccount/SignIn.jsx';
import SignUp from './components/userAccount/SignUp.jsx';
import Logout from './components/userAccount/Logout.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {loggedIn ? (
          <Routes>
            <Route path="/jobspecial" element={<JobSpecial />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
      ) : (
        <Routes>
          {/* Render the Login component by default */}
          <Route path="/" element={<SignIn setLoggedIn={setLoggedIn} />} />

          {/* Nested route for Signup */}
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;



