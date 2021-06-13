import { INITIAL_VALUE } from "../../constants";

/**
 * Gets one array and one option and returns a new sorted array by option
 *
 * @param {array} data
 * @param {string} option
 *  * @returns {array}
 */

export const sortArray = (data, option) => {
  const dataToSort = Array.isArray(data) && option ? data : INITIAL_VALUE.LIST;
  return [...dataToSort].sort((itemA, itemB) => {
    if (itemA[option] < itemB[option]) return -1;
    if (itemA[option] > itemB[option]) return 1;
    return 0;
  });
};
