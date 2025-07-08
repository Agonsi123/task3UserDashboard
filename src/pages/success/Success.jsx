import React from 'react';
import styles from '../success/Success.module.css';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import IconRemove from "../../assets/images/IconRemove.svg";
import image from "../../assets/images/image.jpg";
import { useNavigate } from 'react-router-dom';




const Success = () => {

    const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.successContainer}>
        <div className={styles.successHeader}>
          <div className={styles.Image}>
            <img src={image} alt="" />
          </div>
          <div onClick={() => navigate("/addaddress")} className={styles.close}>
            <img src={IconRemove} alt="Close" />
          </div>
        </div>
        <div className={styles.successContent}>
          <h1>You are successfully registered!</h1>
          <div
              onClick={() => navigate('/')}
          >
            <Button btnText="Go to Login" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Success