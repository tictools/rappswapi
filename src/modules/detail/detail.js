import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetchItem } from '../../common/hooks/use-fetch-item'
import { DetailSection, ErrorModal } from '../../common/components'
import styles from './detail.css'

/**
 * Functional component that renders single item detail card
 *
 * @returns {JSX.Element}
 */
export const Detail = () => {
  const { pathname } = useLocation()
  const {
    item,
    error,
    category,
    isLoading
  } = useFetchItem(pathname)

  return (
    <section className={styles.detail__container}>
      {error
        ? <ErrorModal />
        : <DetailSection {...{
          item,
          category,
          isLoading
        }}
          />}
    </section>
  )
}
