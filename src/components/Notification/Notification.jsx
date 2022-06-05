import React from "react";
import propTypes from "prop-types";
import styles from './Notification.module.css'

const Notification = ({ title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
    </>
  );
};

Notification.propTypes = {
  title: propTypes.string.isRequired,
};

export default Notification;
