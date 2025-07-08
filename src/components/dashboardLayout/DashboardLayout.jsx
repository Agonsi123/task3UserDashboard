import React from 'react';
import styles from '../dashboardLayout/DashboardLayout.module.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className={styles.dashLayout}>
      <aside className={styles.SidebarLayout}>
        <Sidebar/>
      </aside>
      <aside className={styles.mainLayout}>
        <Header/>
        <Outlet/>
      </aside>
    </div>
  );
}

export default DashboardLayout