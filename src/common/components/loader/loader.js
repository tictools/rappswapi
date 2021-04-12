import React from 'react'
import { DEFAULT_STRING } from '../../constants'
import { DarthVaderIcon } from '../../icons'
import styles from './loader.css'

/**
 * Loader component
 * @returns {JSX.Element}
 */
export const Loader = () => {
  return (
    <div>
      <div className={styles['loader__icon--spinner']}>
        <DarthVaderIcon size={150} />
      </div>
      <p>{DEFAULT_STRING.LOADING}</p>
    </div>
  )
}
