import React from 'react';
import styles from '../button/Button.module.css';

const Button = ({btnText}) => {
  return (
    <button type="submit" className={styles.btn}>
      {btnText}
    </button>
  );
}

export default Button