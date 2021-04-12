import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES } from '../../constants'
import styles from './main-header.css'

const propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}

/**
 * Functional component that renders the main header of application
 *
 * @param {string} title - title
 * @param {object} rest - router props injected via withRouter HOC
 * @returns {JSX.Element}
 */
const MainHeader = ({ title, ...router }) => {
  const pathname = router && router.location && router.location.pathname || ROUTES.HOME
  const isHomePath = pathname === ROUTES.HOME
  const navBarContent = getNavBarContent(pathname)
  return (
    <div className={styles['main-header__container']}>
      <h1 className={styles['main-header__header']}>{title}</h1>
      <p className={styles['main-header__version']}>{process.env.VERSION}</p>
      {!isHomePath &&
        <nav className={styles['main-header__nav']}>
          {navBarContent}
        </nav>}
    </div>
  )
}

const getNavBarContent = (pathname) => {
  return (
    pathname === ROUTES.CATEGORIES
      ? <div className={styles['main-header__link-container']}>
        <Link className={styles['main-header__link']} to={ROUTES.HOME}>Home</Link>
        </div>
      : <div className={styles['main-header__link-container']}>
        <Link className={styles['main-header__link']} to={ROUTES.HOME}>Home</Link>
        <Link className={styles['main-header__link']} to={ROUTES.CATEGORIES}>Categories</Link>
        </div>
  )
}

const MainHeaderWithRouter = withRouter(MainHeader)
export { MainHeader, MainHeaderWithRouter }

MainHeader.propTypes = propTypes
