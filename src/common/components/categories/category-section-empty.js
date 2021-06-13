import React from "react";
import { DarthVaderIcon } from "../../icons";
import { DEFAULT_STRING } from "../../constants";
import styles from "./category-section-empty.css";

/**
 * Functional component that render a message when no category is selected
 *
 * @returns {JSX.Element}
 */
export const CategorySectionEmpty = () => {
  return (
    <div className={styles["category-section-empty__container"]}>
      <DarthVaderIcon size={150} />
      <p>{DEFAULT_STRING.EMPTY_CATEGORY}</p>
    </div>
  );
};
