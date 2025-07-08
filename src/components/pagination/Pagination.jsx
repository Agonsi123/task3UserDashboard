import React from 'react';
import styles from '../pagination/Pagination.module.css';
import smallarrowL from '../../assets/images/smallarrowL.svg';
import smallarrowR from "../../assets/images/smallarrowR.svg";
import dots from "../../assets/images/dots.svg";

const Pagination = () => {
  return (
    <div className={styles.pageContainer}>
        <p>Showing data 1 to 8 of 256k entries</p>
        <div className={styles.pageBtns}>
            <img src={smallarrowL} alt="" />
            <button className={styles.btn1}>1</button>
            <button className={styles.btn2}>2</button>
            <button className={styles.btn3}>3</button>
            <button className={styles.btn4}>4</button>
            <img src={dots} alt="" />
            <button className={styles.btn}>40</button>
            <img src={smallarrowR} alt="" />
        </div>
    </div>
  )
}

export default Pagination