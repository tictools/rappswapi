import React from "react";
import PropTypes from "prop-types";
import styles from "./category-list.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
/**
 * Functional component that gets a title and other react elements as children
 * and returns a sectio with the list of provided items
 *
 * @param {string} title - section title
 * @param {React.Element} children - react element
 * @returns {JSX.Element}
 */
export const CategoryList = ({ title, children }) => {
  return (
    <section className={styles["category-list__container"]}>
      <h2 className={styles["category-list__header"]}>{title}</h2>
      <div className={styles["category-list__list"]}>{children}</div>
    </section>
  );
};

CategoryList.propTypes = propTypes;
