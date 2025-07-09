import React, {useState} from 'react';
import styles from '../login/Login.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegistrationSchema } from '../../utils/Validation';
import IconsEye from "../../assets/images/IconsEye.svg";
import Button from "../button/Button";
import { useNavigate, Navigate } from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [firebaseError, setFirebaseError] = useState('');

  const handleSubmit = async(values, {setSubmitting, resetForm}) => {
      setFirebaseError('');
  
      try{
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log('User signed in susscessfull1', userCredential.user);
        alert('Sign In successful! Check your console for user info.');
        resetForm();
        navigate("/dashboard");
      } catch(error) {
        console.error('Firebase sign in error:', error.code, error.message);

        switch (error.code) {
          case "auth/email-already-in-use":
            setFirebaseError("This email address is already registered.");
            break;
          case "auth/invalid-email":
            setFirebaseError("The email address is not valid.");
            break;
          case "auth/operation-not-allowed":
            setFirebaseError(
              "Email/password sign-in is not enabled. Please check your Firebase project settings in the console."
            );
            break;
          case "auth/email-not-registered":
            setFirebaseError("You have not registered.");
            break;
          case "auth/weak-password":
            setFirebaseError("The password is too weak. Please choose a stronger password.");
            break;
          default:
            setFirebaseError("An unexpected error occurred. Please try again.");
            break;
        }
      }finally{
        setSubmitting(false);
    }
  };


  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.formContainer}>
        <p>or login with email</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
            checkbox: false,
          }}
          validationSchema={RegistrationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.formContent}>
              <div className={styles.formField}>
                <label htmlFor="email">Email address</label>
                <Field name="email" type="email" placeholder="example@mail.com" />
              </div>
              <ErrorMessage name="email" component="div" className={styles.error} />
              <div className={styles.formField}>
                <label htmlFor="email">Password</label>
                <Field name="password" type="password" placeholder="********" />
                <img className={styles.eyeIcon} src={IconsEye} alt="Eye Icon" />
              </div>
              <ErrorMessage name="password" component="div" className={styles.error} />

              {/* Firebase errors displayed here */}
              {firebaseError && <div className={styles.firebaseError}>{firebaseError}</div>}

              <div className={styles.registrationBtn} disabled={isSubmitting}>
                <Button btnText={isSubmitting ? "Logging in" : "Login to Dashboard"} />
              </div>
              <div className={styles.checkboxField}>
                <Field name="checkbox" type="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              {/* <button className={styles.btn} type="submit" disabled={isSubmitting}>
                Save information
              </button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login