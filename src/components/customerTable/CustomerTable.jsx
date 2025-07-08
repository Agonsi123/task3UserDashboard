import React from 'react';
import styles from '../customerTable/CustomerTable.module.css';
import Pagination from '../pagination/Pagination';

const customerData = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0110",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Reunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curacao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Aland Islands",
    status: "inactive",
  },
];

const CustomerTable = () => {
  return (
    <div className={styles.tableContainer}>
        <table className={styles.table} width={'100%'}>
            <thead>
                <tr>
                    <th className={styles.roll}>Customer Name</th>
                    <th className={styles.roll}>Company</th>
                    <th className={styles.roll}>Phone Number</th>
                    <th className={styles.roll}>Email</th>
                    <th className={styles.roll}>Country</th>
                    <th className={styles.roll}>Status</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {customerData.map((cdata, index) =>(
                    <tr key={index}>
                        <td className={styles.roll}>{cdata.name}</td>
                        <td className={styles.roll}>{cdata.company}</td>
                        <td className={styles.roll}>{cdata.phone}</td>
                        <td className={styles.roll}>{cdata.email}</td>
                        <td className={styles.roll}>{cdata.country}</td>
                        <td 
                        className={
                            cdata.status === 'Active'
                            ? styles.active
                            : styles.inActive
                            }
                        >
                            <span>{cdata.status}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Pagination/>
    </div>
  )
}

export default CustomerTable