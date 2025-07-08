import React from 'react';
import styles from '../addAddress/AddAddress.module.css';
import Container from '../../components/container/Container';
import IconRemove from "../../assets/images/IconRemove.svg";
import Button from '../../components/button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddressSchema } from '../../utils/Validation';
import { useNavigate } from 'react-router-dom';


const AddAddress = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className={styles.headerContent}>
            <p className={styles.headerCont1}>Add Addresss</p>
            <p className={styles.headerCont2}>3 of 3</p>
          </div>
          <div onClick={() => navigate('/address')}>
            <img src={IconRemove} alt="close" />
          </div>
        </div>
        <Formik
          initialValues={{
            street: "",
            apartment: "",
            city: "",
            state: "",
            zip: "",
          }}
          validationSchema={AddressSchema}
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              alert(`Submitted values: ${JSON.stringify(values, null, 2)}`);
              resetForm();
              navigate('/success');
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.formContent}>
              <div className={styles.formField}>
                <label htmlFor="street">Street address</label>
                <Field name="street" type="text" placeholder="319 Bainbridge Street" />
              </div>
              <ErrorMessage name="street" component="div" className={styles.error} />
              <div className={styles.formApartment}>
                <Field name="apartment" type="text" placeholder="Apartment" />
                <p>Optional</p>
              </div>

              <div className={styles.formField}>
                <label htmlFor="city">City</label>
                <Field name="city" type="text" placeholder="New York City" />
              </div>
              <ErrorMessage name="city" component="div" className={styles.error} />

              <div className={styles.stateZip}>
                <div>
                  {/* code for State field */}
                  <div className={styles.formField}>
                    <label htmlFor="state">State</label>
                    <Field name="state" type="text" placeholder="New York" />
                  </div>
                  <ErrorMessage name="state" component="div" className={styles.error} />
                </div>
                <div>
                  {/* code for Zip code field */}
                  <div className={styles.formField}>
                    <label htmlFor="zip">Zip code</label>
                    <Field name="zip" type="text" placeholder="11233" />
                  </div>
                  <ErrorMessage name="zip" component="div" className={styles.error} />
                </div>
              </div>
              <div className={styles.addressBtn}>
                <Button btnText="Save information" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default AddAddress