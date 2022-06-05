import React from "react";
import propTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <div className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
