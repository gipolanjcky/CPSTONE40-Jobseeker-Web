import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {
  const handleYesClick = async () => {
    const auth = getAuth();

    try {
        await signOut(auth); // Sign out the current user
        
        // Redirect to the login page
        window.location.href = '/';
      } catch (error) {
        console.error('Logout Error:', error);
      }
    };

  const handleNoClick = () => {
    // Do nothing, just stay on the logout page
  };

  return (
    <div className="logout-container">
      <p className="logout-message">Are you sure you want to log out?</p>
      <div className="button-container">
        <button className="logout-button" onClick={handleYesClick}>Yes</button>
        <button className="cancel-button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
};

export default Logout;
