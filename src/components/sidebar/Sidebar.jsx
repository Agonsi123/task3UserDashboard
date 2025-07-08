import React, {useEffect, useState} from 'react';
import styles from '../sidebar/Sidebar.module.css';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import SidebarMenu from './sidebarMenu/SidebarMenu';
import SidebarFooter from './sidebarFooter/SidebarFooter';
import UsemediaQuery from './hooks/UsemediaQuery';


const Sidebar = () => {
  // const [collapsed, setCollapsed] = useState(window.innerWidth < 700);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setCollapsed(window.innerWidth < 700);
  //   };
  //   window.addEventListener('resize', handleResize);
  // }, [collapsed]);

  const {matches:collapsed} = UsemediaQuery('(max-width: 700px)')

  return (
    <div className={`${styles.sidebarContainer} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.sidebarTopContent}>
        <SidebarHeader collapsed={collapsed} />
        <SidebarMenu collapsed={collapsed} />
      </div>
      <SidebarFooter collapsed={collapsed}/>
    </div>
  );
}

export default Sidebar