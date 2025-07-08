import React from 'react';
import styles from '../sidebarMenu/SidebarMenu.module.css';
import key from "../../../assets/images/key.svg";
import D3square from "../../../assets/images/D3square.svg";
import discount from "../../../assets/images/discount.svg";
import messagequestion from "../../../assets/images/message question.svg";
import user from "../../../assets/images/user.svg";
import wallet from "../../../assets/images/wallet.svg";
import chevronright from "../../../assets/images/chevron-right.svg";
import chevronrightWhite from "../../../assets/images/chevronrightWhite.svg";



const menuItems = [
  {
    icon: <img src={key} alt="key Icon" />,
    label: "Dashboard",
  },
  {
    icon: <img src={D3square} alt=" Icon" />,
    label: "Product",
  },
  {
    icon: <img src={user} alt="user" />,
    label: "Customers",
  },
  {
    icon: <img src={wallet} alt="Icon" />,
    label: "Income",
  },
  {
    icon: <img src={discount} alt="Icon" />,
    label: "Promote",
  },
  {
    icon: <img src={messagequestion} alt="Icon" />,
    label: "Help",
  },
];


const SidebarMenu = ({collapsed}) => {
  return (
    <div className={styles.menuContainer}>
      {menuItems.map((item, index) => {
        const isActive = item.label === 'Customers';
        return (
          <div key={index} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
            {!collapsed && <img className={styles.chevron} src={isActive ? chevronrightWhite : chevronright} alt="right arrow" />}
          </div>
        );
      })}
    </div>
  );
}

export default SidebarMenu

