import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DEFAULT_STRING, INITIAL_VALUE } from "../../constants";
import styles from "./filter-bar.css";

const propTypes = {
  labels: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

/**
 * Functional component that renders the category filter bar
 *
 * @param {string} title - title
 * @param {function} onInputChange - input change handler
 * @param {function} onOptionChange - select change handler
 * @returns {JSX.Element}
 */
export const FilterBar = ({ labels, onInputChange, onOptionChange }) => {
  const [inputValue, setInputValue] = useState(DEFAULT_STRING.EMPTY);
  const [inputValueDebounced, setInputValueDebounced] = useState(
    DEFAULT_STRING.EMPTY
  );
  const [inputOnceUpdated, setInputOnceUpdated] = useState(false);
  const optionName = labels.name || labels.title;

  const handleSelectChange = (event) => {
    const sorter =
      event.target.value !== DEFAULT_STRING.OPTION
        ? event.target.value
        : INITIAL_VALUE.NULL;
    onOptionChange(sorter);
  };

  const resetInputValue = () => {
    setInputValue(DEFAULT_STRING.EMPTY);
    onInputChange(DEFAULT_STRING.EMPTY);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      !inputOnceUpdated && setInputOnceUpdated(true);
      setInputValueDebounced(inputValue);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  useEffect(() => {
    inputOnceUpdated && onInputChange(inputValueDebounced);
  }, [inputValueDebounced]);

  return (
    <div className={styles["filter-bar__container"]}>
      <div className={styles["filter-bar__selector"]}>
        <label htmlFor="option-selector">Order by:</label>
        <select id="option-selector" onChange={handleSelectChange}>
          <option>{DEFAULT_STRING.OPTION}</option>
          <option value={optionName}>{optionName}</option>
        </select>
      </div>
      <div className={styles["filter-bar__input"]}>
        <label htmlFor="input-selector">Filter by name:</label>
        <input
          type="text"
          id="input-selector"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={resetInputValue}>x</button>
      </div>
    </div>
  );

FilterBar.propTypes = propTypes;
