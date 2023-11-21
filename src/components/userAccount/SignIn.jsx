import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import busyanOpening from '../../assets/busyanOpening.png';
import BYLogo from '../../assets/BYLogo.png';
import googleSignin from '../../assets/googleSignin.png';

const SignIn = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demonstration purposes, let's directly set the user as logged in
    setLoggedIn(true);
    navigate('/jobSpecial'); //-i-direct to JobSpecial
  };

  /*const handleLogin = async () => {
    const auth = getAuth();
  
    try {
      // Use Firebase authentication method for email/password login
      await signInWithEmailAndPassword(auth, email, password);

      // Set the user as logged in
      setLoggedIn(true);

      // Redirect to the JobSpecial page
      navigate('/jobSpecial');
    } catch (error) {
      console.error('Email/Password Sign-In Error:', error);
    }
  };
  */

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }); // Add this line
  
    try {
      await signInWithPopup(auth, provider);
      setLoggedIn(true); // Set the user as logged in
  
      // Redirect to the dashboard or other page
      navigate('/jobSpecial'); //-i-direct to JobSpecial
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };
  
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={busyanOpening} alt="Sign In" className="busyanOpening-image" />
      </div>
      <div className="login-form">
        <img src={BYLogo} alt="Logo" className="BYLogo-image" />
        <h2>Welcome to BusYan</h2>
        <p>Enter your account</p>
        <form>
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
          <div className="forgot-password">
            <button type="button">Forgot the password?</button>
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="signup">
          <p>
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign up
            </button>
          </p>
        </div>
        <p>___________________or___________________</p>
        <div className="image-buttons">
          <button type="button" className="image-button" onClick={handleGoogleLogin}>
            <img src={googleSignin} alt="google" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
