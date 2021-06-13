import React, { useContext } from "react"
import { CATEGORIES } from "../../constants"
import GlobalContext from "../../../context/global-context"
import styles from "./select-bar-category.css"

/**
 * Functional component that renders a category search bar
 *
 * @returns {React.Element}
 */
export const SelectBarCategory = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext)
  const updateCategory = (category) => {
    setGlobalState({ ...globalState, category })
  }

  return (
    <div className={styles["search-category__container"]}>
      <ul className={styles["search-category__list"]}>
        {Object.values(CATEGORIES).map((item) => {
          return (
            <li key={item} className={styles["search-category__item"]}>
              <button
                className={styles["search-category__button"]}
                onClick={() => updateCategory(item)}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
