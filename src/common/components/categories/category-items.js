import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './category-items.css'

const propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.string
  }).isRequired
}

/**
 * Functional component that gets an array of items and a category
 * and returns an array of mapped items to <li> HTML elements
 *
 * @param {array} data - array with items to render
 * @param {object} labels - object with label strings
 * @returns {array<HTMLLIElement>}
 */
export const CategoryItems = ({ data, labels }) => {
  const labelName = labels.name || labels.title

  return (
    <ul className={styles['category-items__list']}>
      {
                data.map((item) => {
                  const { resourcePath, index } = item
                  const URL_DETAIL = `/${resourcePath}/${index}`
                  return (
                    <li key={index} className={styles['category-items__card']}>
                      <p className={styles['category-items__label-name']}>
                        <span className={styles['category-items__content']}> {item[labelName]}</span>
                      </p>
                      <Link className={styles['category-items__link']} to={URL_DETAIL}>+</Link>
                    </li>
                  )
                })
            }
    </ul>
  )
}

CategoryItems.propTypes = propTypes
