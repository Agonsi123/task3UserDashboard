import React from 'react';
import styles from '../stats/Stats.module.css';
import arrowUp from '../../assets/images/arrow-up.svg';
import arrowDown from "../../assets/images/arrow-down.svg";




const Stats = ({icon, label, figure, percentage, up, users}) => {
  return (
    <div className={styles.statsContainer}>
      {icon}
      <div className={styles.statsContent}>
        <h6>{label}</h6>
        <h1>{figure}</h1>
        {percentage && (
          <div className={`${styles.statsCont} ${up ? styles.arrowUp : styles.arrowDown}`}>
            {up ? <img src={arrowUp} alt="arrow up" /> : <img src={arrowDown} alt="arrow down" />}{" "}
            {percentage}
            <span className={styles.month}>this month</span>
          </div>
        )}
        {users && (
          <div className={styles.statsUsers}>
            {users.map((user, index) => (
              <img key={index} src={user} alt={`user-${index}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Stats