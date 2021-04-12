import React from 'react'
import { Link } from 'react-router-dom'
import { StarWarsIcon } from '../../icons'
import styles from './home.css'

export const Home = () => {
  return (
    <div className={styles.home__container}>
      <h2 className={styles.home__subtitle}>Welcome to React Application - Star Wars API</h2>
      <StarWarsIcon size={250} />
      <Link className={styles.home__link} to='/categories'>Enter</Link>
    </div>
  )
}
