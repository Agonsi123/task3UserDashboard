import React from 'react';
import styles from '../header/Header.module.css';
import hand from '../../assets/images/hand.jfif';
import SearchBar from '../search/SearchBar';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.hello}>
        <h1>Hello Evano</h1>
        <img src={hand} alt="handwave" />
        <h1>,</h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header