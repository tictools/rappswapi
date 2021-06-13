import React from "react"
import PropTypes from "prop-types"
import {
  DEFAULT_STRING,
  INITIAL_VALUE,
  MAPPED_ITEMS_RESOURCE,
} from "../../constants"
import { sortArray, filterArrayByName } from "../../helpers"
import { FilterBar } from "../filter-bar/filter-bar"
import { CategoryList } from "./category-list"
import { CategoryItems } from "./category-items"
import { Loader } from "../loader/loader"
import styles from "./category-section.css"

const propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
/**
 * Functional component that gets a category, a data array and a isLoading boolean
 * and returns a react element depending on a conditional statement
 *
 * @param {string} category - category name
 * @param {array} data - object array with items to render
 * @param {boolean} isLoading - loading status
 * @returns {JSX.Element}
 */
export class CategorySection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredData: INITIAL_VALUE.LIST,
      labels: {
        name: DEFAULT_STRING.EMPTY,
        quantity: DEFAULT_STRING.EMPTY,
      },
      sorter: INITIAL_VALUE.NULL,
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.sortData = this.sortData.bind(this)
    this.resetSortData = this.resetSortData.bind(this)
    this.filterData = this.filterData.bind(this)
    this.resetFilterData = this.resetFilterData.bind(this)
  }

  componentDidMount() {
    const [item] = this.props.data
    const [nameKey] = Object.keys(item)
    this.setState({
      labels: {
        name: nameKey,
      },
    })
  }

  componentDidUpdate(prevProps) {
    const [item] = prevProps.data
    const [nameKey] = Object.keys(item)
    if (prevProps !== this.props) {
      this.setState({
        labels: {
          name: nameKey,
        },
        filteredData: INITIAL_VALUE.LIST,
      })
    }
  }

  render() {
    const { labels, filteredData } = this.state
    const { category, data, isLoading } = this.props
    return (
      <section className={styles["category-section__container"]}>
        {isLoading ? (
          <Loader />
        ) : (
          <CategoryList title={category}>
            <FilterBar
              labels={labels}
              onInputChange={this.handleFilter}
              onOptionChange={this.handleSort}
            />
            <CategoryItems
              items={data}
              data={this.getDataOrFilteredItems()}
              filteredData={filteredData}
              labels={labels}
            />
          </CategoryList>
        )}
      </section>
    )
  }

  handleFilter(filter) {
    const { sorter } = this.state
    this.isFilterValid(filter)
      ? this.filterData(filter)
      : this.resetFilterData(sorter)
  }

  isFilterValid(filter) {
    return filter !== DEFAULT_STRING.EMPTY
  }

  filterData(filter) {
    const dataToFilter = this.getDataOrFilteredItems()
    const filteredData = filterArrayByName(filter, dataToFilter)
    this.setState({
      filteredData,
    })
  }

  resetFilterData(sorter) {
    const { data } = this.props
    this.sortData(sorter, data)
  }

  handleSort(sorter) {
    const { data } = this.props
    this.isSorterValid(sorter)
      ? this.sortData(sorter, data)
      : this.resetSortData()
  }

  isSorterValid(sorter) {
    return sorter !== INITIAL_VALUE.NULL
  }

  sortData(sorter, data) {
    let sortedData = sortArray(data, sorter)
    sortedData = this.shouldBeReversed(sorter)
      ? sortedData.reverse()
      : sortedData
    this.setState({
      sorter,
      filteredData: sortedData,
    })
  }

  resetSortData() {
    this.setState({
      sorter: INITIAL_VALUE.NULL,
      filteredData: INITIAL_VALUE.LIST,
    })
  }

  shouldBeReversed(option) {
    return (
      option === MAPPED_ITEMS_RESOURCE.NAME_AND_FILM[1] ||
      option === MAPPED_ITEMS_RESOURCE.TITLE_AND_CHARACTERS[1]
    )
  }

  getDataOrFilteredItems() {
    const { filteredData } = this.state
    const { data } = this.props
    return filteredData.length ? filteredData : data
  }
}

CategorySection.propTypes = propTypes
