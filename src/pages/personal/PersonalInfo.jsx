import React from 'react';
import styles from '../personal/PersonalInfo.module.css';
import Container from '../../components/container/Container';
// import Button from '../../components/button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PersonalInfoSchema } from '../../utils/Validation';
// import PhoneInput from 'react-phone-number-input/input';
// import 'react-phone-number-input/style.css';
import IconRemove from '../../assets/images/IconRemove.svg';
import IconInfo from "../../assets/images/IconInfo.svg";
import { useNavigate } from 'react-router-dom';


const options = [
  { value: "+598", label: "+598" },
  { value: "+234", label: "+234" },
  { value: "+355", label: "+355" },
];

const PersonalInfo = () => {

    const navigate = useNavigate();

    const handleSubmit = (values, {resetForm}) => {
      setTimeout(() => {
        alert(`Submitted values: ${JSON.stringify(values, null, 2)}`);
        resetForm();
        navigate("/address");
      }, 400);
    }

  return (
    <Container>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className={styles.headerContent}>
            <p className={styles.headerCont1}>Personal information</p>
            <p className={styles.headerCont2}>2 of 3</p>
          </div>
          <div onClick={() => navigate("/")}>
            <img src={IconRemove} alt="close Icon" />
          </div>
        </div>
        <Formik
          initialValues={{
            fullname: "",
            gender: "",
            countryCode: "",
            phone: "",
            birthday: "",
          }}
          validationSchema={PersonalInfoSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              className={styles.formContent}
              onSubmit={(e) => {
                console.log("Form is trying to submit");
                e.preventDefault();
                navigate('/address');
              }}
            >
              <div className={styles.formField}>
                <Field name="fullname" type="text" placeholder="Full name" />
              </div>
              <ErrorMessage name="fullname" component="div" className={styles.error} />
              <div className={styles.radioField}>
                <p className={styles.gender}>Gender:</p>
                <label htmlFor="">
                  <Field name="gender" type="radio" value="male" />
                  Male
                </label>
                <label htmlFor="">
                  <Field name="gender" type="radio" value="female" />
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className={styles.error} />
              <div className={styles.information}>
                <img src={IconInfo} alt="Information Icon" />
                <p>The phone number and birthday are only visible to you</p>
              </div>
              {/* countryCode and phone field */}

              <div className={styles.phoneCode}>
                <div className={styles.codeField}>
                  <Field as="select" name="countryCode">
                    <option value="">+598</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
                {/* <ErrorMessage name="countryCode" component="div" className={styles.error} /> */}

                <div className={styles.phoneField}>
                  <Field name="phone" type="text" placeholder="Phone number" />

                  {/* <PhoneInput
                    international
                    countrycallingcodeeditable={false}
                    defaultCountry="US"
                    value={values.phone}
                    value={values.phone || ""}
                    onChange={(value) => {
                      console.log('Phone changed:', value);
                      setFieldValue('phone', value);
                    }}
                    onChange={(value) => setFieldValue("phone", value)}
                    placeholder="Phone number"
                    onBlur={() => {}}
                  /> */}
                <ErrorMessage name="phone" component="div" className={styles.phoneFielderror} />
                </div>
              </div>

              <div className={styles.formField}>
                <Field name="birthday" type="date" placeholder="Birthday" />
                <p className={styles.optional}>Optional</p>
              </div>
              <ErrorMessage name="birthday" component="div" className={styles.error} />
              <button className={styles.btn} type="submit" disabled={isSubmitting}>
                Save information
              </button>
              {/* <div className={styles.personalBtn}>
                <Button btnText="Save information" />
              </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default PersonalInfo