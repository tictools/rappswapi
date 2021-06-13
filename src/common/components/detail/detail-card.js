import React from "react";
import { MAPPED_ITEM_KEYS } from "../../constants";
import PropTypes from "prop-types";
import styles from "./detail-card.css";
import { withRouter } from "react-router-dom";

const propTypes = {
  category: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

/**
 * Functional component that returns a detail card
 *
 * @param {object} item - data item
 * @param {array} category - item category
 * @returns {JSX.Element}
 */
const DetailCard = ({ item, category, ...router }) => {
  const getItemContent = (currentItem, isLabelRendered = true) => {
    const itemEntries = Object.entries(currentItem);
    return itemEntries
      .map(([label, content], index) => {
        const isHeader = label === "header";
        return (
          !isHeader && (
            <li key={index} className={styles["detail__list-item"]}>
              <p className={styles["detail__list-item--header"]}>
                {isLabelRendered && `${MAPPED_ITEM_KEYS[label]}`}
              </p>
              <p className={styles["detail__list-item--content"]}>{content}</p>
            </li>
          )
        );
      })
      .filter(Boolean);
  };

  const getTitleFromHeaderData = (item) => item.header;
  const data = getItemContent(item);
  const header = getTitleFromHeaderData(item);

  return (
    <div className={styles.detail__container}>
      <button onClick={() => router.history.goBack()}>Back</button>
      <h2 className={styles.detail__header}>{header}</h2>
      <div className={styles["detail__container-list"]}>
        <p className={styles.detail__label}>general details</p>
        <ul className={styles.detail__list}>{data}</ul>
      </div>
    </div>
  );
};

DetailCard.propTypes = propTypes;

const DetailCardWithRouter = withRouter(DetailCard);

export { DetailCard, DetailCardWithRouter };
