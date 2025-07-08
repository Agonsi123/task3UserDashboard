import React from 'react';
import styles from '../advanceSearch/AdvanceSearch.module.css';
import SearchBar from '../search/SearchBar';
import IconsChvronDown from '../../assets/images/IconsChvronDown.svg';

const AdvanceSearch = () => {
  return (
    <div className={styles.advanceContainer}>
        <div className={styles.advanceText}>
            <h6>All Customers</h6>
            <p>Active Members</p>
        </div>
        <div className={styles.advanceSch}>
            <SearchBar/>
            <div className={styles.advanceSort}>
                <p>Sort by: <span>Newest</span></p>
                <img src={IconsChvronDown} alt="down arrow" />
            </div>
        </div>
    </div>
  )
}

export default AdvanceSearch