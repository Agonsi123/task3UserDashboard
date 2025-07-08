import React from 'react';
import styles from '../search/SearchBar.module.css';
import IconSearch from '../../assets/images/IconSearch.svg';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
        <img src={IconSearch} alt="Search" />
        <input type="search" name="search" id="" placeholder='Search' />
    </div>
  )
}

export default SearchBar