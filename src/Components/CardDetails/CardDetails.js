import React from 'react';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './CardDetails.module.css';

const CardDetails = ({ email, phone, website }) => {
  return (
    <>
      <div className={styles.userDetails}>
        <MailOutlined />
        <p>{email}</p>
      </div>
      <div className={styles.userDetails}>
        <PhoneOutlined />
        <p>{phone}</p>
      </div>
      <div className={styles.userDetails}>
        <GlobalOutlined />
        <p>http://{website}</p>
      </div>
    </>
  );
};

export default CardDetails;
