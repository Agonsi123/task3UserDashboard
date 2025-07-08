import React from 'react';
import styles from '../dashboard/Dashboard.module.css';
import Stats from '../../components/stats/Stats';
import user1 from "../../assets/images/user1.svg";
import user2 from "../../assets/images/user2.svg";
import user3 from "../../assets/images/user3.svg";
import user4 from "../../assets/images/user4.svg";
import user5 from "../../assets/images/user5.svg";
import monitor from "../../assets/images/monitor.svg";
import usersgreen from "../../assets/images/usersgreen.svg";
import usergreen from "../../assets/images/usergreen.svg";
import AdvanceSearch from '../../components/advanceSearch/AdvanceSearch';
import CustomerTable from '../../components/customerTable/CustomerTable';


const Dashboard = () => {
  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.dashStats}>
        <Stats
          icon={<img src={usersgreen} alt="icon" />}
          label="Total Customers"
          figure="5,423"
          percentage="16%"
          up
        />
        <Stats
          icon={<img src={usergreen} alt="icon" />}
          label="Members"
          figure="1,893"
          percentage="1%"
        />
        <Stats
          icon={<img src={monitor} alt="icon" />}
          label="Active Now"
          figure="189"
          users={[user1, user2, user3, user4, user5]}
        />
      </div>
      <div className={styles.dashMain}>
        <AdvanceSearch/>
        <CustomerTable/>
      </div>
    </div>
  );
}

export default Dashboard