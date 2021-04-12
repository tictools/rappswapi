import React from 'react'
import { Loader } from '../loader/loader'
import { DetailCardWithRouter as DetailCard } from './detail-card'
import styles from './detail-section.css'

/**
 * Functional component that returns a detail section
 *
 * @param {object} item - data item
 * @param {array} category - item category
 * @param {boolean} isLoading - loading status
 * @returns {JSX.Element}
 */
export const DetailSection = ({ item, category, isLoading }) => {
  return (
    <section className={styles['detail-section__container']}>
      {
                isLoading
                  ? <Loader />
                  : <DetailCard {...{
                    item,
                    category
                  }}
                    />
            }
    </section>
  )
}
