import React from "react";
import styles from "../address/Address.module.css";
import Container from "../../components/container/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SearchSchema } from "../../utils/Validation";
import IconRemove from "../../assets/images/IconRemove.svg";
import IconDollar from "../../assets/images/IconDollar.svg";
import IconSearch from "../../assets/images/IconSearch.svg";
import IconTime from "../../assets/images/IconTime.svg";
import IconUsers from "../../assets/images/IconUsers.svg";
import locationIcon from "../../assets/images/locationIcon.svg";
import { useNavigate } from "react-router-dom";


const Address = () => {

    const navigate = useNavigate();

    return (
      <Container>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.headerContent}>
              <p className={styles.headerCont1}>Add Addresss</p>
              <p className={styles.headerCont2}>3 of 3</p>
            </div>
            <div onClick={() => navigate('/personalinfo')}>
              <img src={IconRemove} alt="close" />
            </div>
          </div>
          <Formik
            initialValues={{ searchQuery: "" }}
            validationSchema={SearchSchema}
            onSubmit={(values, { setSubmitting }) => {
              alert("Search submitted:", values.searchQuery);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={styles.formContent}>
                <div className={styles.searchContent}>
                  <div className={styles.searchField}>
                    <Field name="searchQuery" type="text" placeholder="Search for address" />
                    <img src={IconSearch} alt="Search" />
                  </div>
                  <ErrorMessage name="searchQuery" component="div" className={styles.error} />
                </div>
                <div className={styles.btns}>
                  <div className={styles.btn1}>
                    <img src={locationIcon} alt="location" />
                    <button type="button">Use current location</button>
                  </div>
                  <button type="button" onClick={() => navigate("/addaddress")} className={styles.btn2}>
                    Add manually
                  </button>
                </div>
                <div className={styles.shareContainer}>
                  <p>Sharing your address shows:</p>
                  <div className={styles.shareCont}>
                    <img src={IconUsers} alt="users" />
                    <p>People near you</p>
                  </div>
                  <div className={styles.shareCont}>
                    <img src={IconTime} alt="users" />
                    <p>Estimated delivery time</p>
                  </div>
                  <div className={styles.shareCont}>
                    <img src={IconDollar} alt="users" />
                    <p>Estimate shipping costs</p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    );
};

export default Address;
