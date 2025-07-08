import React from 'react';
import styles from '../sidebarFooter/SidebarFooter.module.css';
import Ellipse8 from '../../../assets/images/Ellipse 8.svg';
import IconsChvronDown from "../../../assets/images/IconsChvronDown.svg";

const SidebarFooter = ({collapsed}) => {
  return (
    <div className={styles.footerContainer}>
      {!collapsed && (
        <div className={styles.footerTop}>
          <p>Upgrade to PRO to get access to all Features!</p>
          <button type="button">Get Pro Now!</button>
        </div>
      )}

      {collapsed ? (
          <img className={styles.avatar} src={Ellipse8} alt="User" />
        ) : (
          <div className={styles.footerBottom}>
            <div className={styles.footerUserImage}>
              <img src={Ellipse8} alt="" />
              <div className={styles.footerUserName}>
                <h5>Evano</h5>
                <p>Project Manager</p>
              </div>
            </div>
            <img className={styles.arrowDown} src={IconsChvronDown} alt="arrowdown" />
          </div>  
      )}
      
    </div>
  );
}

export default SidebarFooter