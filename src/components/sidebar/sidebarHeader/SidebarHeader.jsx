import React from 'react';
import styles from '../sidebarHeader/SidebarHeader.module.css';
import setting from '../../../assets/images/setting 1.svg';

const SidebarHeader = ({collapsed}) => {
  return (
    <div className={styles.sideheader}>
      {collapsed ? (
        <img src={setting} alt="logo" />
      ) : (
        <div className={styles.headerContent}>
          <img src={setting} alt="logo" />
          <div className={styles.headerText}>
            <h1>Dashboard</h1>
            <p>v.01</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarHeader