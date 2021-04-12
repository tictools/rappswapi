import React, { useState, useContext } from 'react'
import { SelectBarCategory, CategorySection, CategorySectionEmpty, ErrorModal } from '../../common/components'
import GlobalContext from '../../context/global-context'

import { useFetchCategory } from '../../common/hooks/use-fetch-category'
import styles from './categories.css'

/**
 * Functional component that renders the full view for category section
 *
 * @returns {JSX.Element}
 */
export const Categories = () => {
  const { globalState:{ category, items } } = useContext(GlobalContext)
  const { isLoading, error } = useFetchCategory()

  return (
    <div className={styles.categories__container}>
      <SelectBarCategory />
      { items.length
        ? <CategorySection
            category={category}
            data={items}
            isLoading={isLoading}
          />
        : error
          ? <ErrorModal />
          : <CategorySectionEmpty />}
    </div>
  )
}
