import React, {useState} from 'react';
import styles from '../registration/Registration.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegistrationSchema } from "../../utils/Validation";
import goodIcons from "../../assets/images/goodIcons.svg";
import IconsEye from "../../assets/images/IconsEye.svg";
import Button from "../button/Button"; 
import { useNavigate, Navigate } from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useAuth } from '../../context/authContext';
// import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';



const Registration = () => {
  const [firebaseError, setFirebaseError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(values, {setSubmitting, resetForm}) => {
    setFirebaseError('');

    try{
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log('User registered susscessfull1', userCredential.user);
      alert('Registration successful! Check your console for user info.');
      resetForm();
      navigate("/personalinfo");
    } catch(error) {
      console.error('Firebase registration error:', error.code, error.message);
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


  return (
    <div>
      <div className={styles.formContainer}>
        <p>or register with email</p>
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
                <img className={styles.goodIcon2} src={goodIcons} alt="Good Icon" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email">Password</label>
                <Field name="password" type="password" placeholder="********" />
                <img className={styles.eyeIcon} src={IconsEye} alt="Eye Icon" />
                <img className={styles.goodIcon} src={goodIcons} alt="Good Icon" />
              </div>
              <ErrorMessage name="password" component="div" className={styles.error} />

              {/* Firebase errors displayed here */}
              {firebaseError && <div className={styles.firebaseError}>{firebaseError}</div>}
              
              <div className={styles.registrationBtn} disabled={isSubmitting}>
                <Button btnText={isSubmitting ? "Registering..." : "Create account"} />
              </div>
              <div className={styles.checkboxField}>
                <Field name="checkbox" type="checkbox" />
                <label htmlFor="checkbox">Send me news and promotions</label>
              </div>
              <p>
                By continuing I agree with the{" "}
                <span>
                  Terms & Conditions. <br />
                  Privacy Policy
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Registration