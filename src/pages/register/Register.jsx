import React, {useState} from 'react';
import styles from '../register/Register.module.css';
import Registration from '../../components/registration/Registration';
import Login from '../../components/login/Login';
import Facebook from '../../assets/images/Facebook.svg'
import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.svg";
import IconRemove from "../../assets/images/IconRemove.svg";
import Container from '../../components/container/Container';
import {auth} from '../../firebase/firebase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [activeTab, setActiveTab] = useState('register');

    const [firebaseError, setFirebaseError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
      setFirebaseError('');
      setLoading(true);

      const Provider = new GoogleAuthProvider();

      try{
        const result = await signInWithPopup(auth, Provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log('Google Sign-In successful!', user);
        navigate('/dashboard');

        console.log('Google Access Token:', token);
        alert('Welcome, ${user.displayName || user.email}!');
        
      } catch (error) {
        console.error('Google Sign-In error:', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        let displayError = 'An unknown error occurred during Google Sign-In.';

        switch (errorCode) {
          case "auth/popup-closed-by-user":
            displayError = "Sign-in window closed. Please try again.";
            break;
          case "auth/cancelled-popup-request":
            displayError =
              "Only one Google Sign-In pop-up can be active at a time. Please wait or close the previous one.";
            break;
          case "auth/accounts-exists-with-different-credential":
            displayError =
              "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address (${email}).";
            break;
          case "auth/operation-not-allowed":
            displayError =
              "Google Sign-In is not enabled for this project. Please check your Firebase console settings.";
            break;
          case "auth/unauthorized-domain":
            displayError =
              "The domain is not authorized for Google Sign-In. Add it to your Firebase console.";
            break;
          default:
            displayError = "Google Sign-In Error: ${errorMessage} (Code: ${errorCode}).";
            break;
        }
        setFirebaseError(displayError);
      }finally{
        setLoading(false);
      }
    };

  return (
    <Container>
      <div className={styles.registerContainer}>
        <div className={styles.header}>
          <div className={styles.tabs}>
            <button
              className={activeTab === "register" ? styles.activeTab : ""}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
            <button
              className={activeTab === "login" ? styles.activeTab : ""}
              onClick={() => setActiveTab("login")}
            >
              Log in
            </button>
          </div>
          <img src={IconRemove} alt=" Remove Icon" />
        </div>
        <div className={styles.socials}>
          <img src={Apple} alt="Apple Icon" />
          <img src={Facebook} alt="Facebook Icon" />
          <div onClick={handleGoogleSignIn} disabled={loading} >
            <img src={Google} alt="Google Icon" />
            {/* {loading ? 'Signing in...' : 'Sign in with Google'} */}
          </div>
        </div>
        <div className={styles.registerContent}>
          {activeTab === "register" ? <Registration /> : <Login />}
        </div>
      </div>
    </Container>
  );
}

export default Register