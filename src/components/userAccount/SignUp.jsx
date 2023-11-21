import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import busyanOpening from '../../assets/busyanOpening.png';
import BYLogo from '../../assets/BYLogo.png';
import { auth } from '../../Firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../Firebase.js';
import { collection, addDoc } from '@firebase/firestore'


const SignUp = ({ setLoggedIn }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();
  
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Extract the user from the userCredential
      const user = userCredential.user;

       // Create a Firestore document to store user information
      const usersCollection = collection(db, 'users'); // 'users' is the Firestore collection name
      // Define the user data to save
      const userData = {
        fullName,
        email,
        password,
        confirmPassword,
        contactNumber,
        countryCode,
        agreedToTerms,
    
      };

      // Save user data to Firestore
      await addDoc(usersCollection, {
        uid: user.uid, // Optionally store the user's UID as part of the document
        ...userData,
      });

      // Log user credentials and other relevant information
      console.log('User Signed Up:', {
        uid: user.uid,
        email: user.email,
        ...userData,
      });

      setLoggedIn(true);

      navigate('/dashboard'); //-i-direct to JobSpecial
    } catch (error) {
      
      console.error('Signup Error:', error.message);
    }
  };
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
  
  const handleTermsCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  return (
    
    <div className="login-container">
      <div className="image-container">
        <img src={busyanOpening} alt="busyanOpening" className="busyanOpening-image" />
      </div>
      <div className="login-form">
        <img src={BYLogo} alt="BYLogo" className="BYLogo-image" />
        <h2 >Welcome to BusYan</h2>
        <p>Create your account</p>
        <form>
            <div className="input-container">
                <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
          <div className="input-container">
            <select
              id="signupCountryCode"
              value={countryCode}
              onChange={handleCountryCodeChange}
              style={{ width: '50px' }}
            >
              <option value="+1">+63 (Philippines)</option>
              <option value="+1">+1 (United States)</option>
              <option value="+44">+44 (United Kingdom)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="smaller-font">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={handleTermsCheckboxChange}
              />
              By checking the box you agree to our{' '}
              <Link to="/terms" style={{ color: 'blue' }}>
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button className="signup-button" onClick={handleSignup}>
            Continue
          </button>
        </form>
        <p className="already">Already have an account? <Link to="/">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;


