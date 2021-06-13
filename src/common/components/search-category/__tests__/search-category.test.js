import React from "react"
import { shallow } from "enzyme"
import { createEnzymeAdapter } from "../../../../../test/enzyme-adapter"
import { SelectBarCategory } from "../select-bar-category"

createEnzymeAdapter()

describe("SearchCategory", () => {
  const EXPECTED = {
    DIV_ELEMENT_LENGTH: 1,
    UL_ELEMENT_LENGTH: 1,
    LI_ELEMENT_LENGTH: 6,
    BUTTON_ELEMENT_LENGTH: 6,
  }
  const handleCategorySearch = jest.fn()
  const updateCategory = jest.fn()
  const setGlobalState = jest.fn()

  const mockedProps = {
    handleCategorySearch,
    updateCategory,
    setGlobalState,
  }

  test("should render elements properly", () => {
    const wrapper = shallow(<SelectBarCategory {...mockedProps} />)
    const divElement = wrapper.find(".search-category__container")
    const ulElement = wrapper.find(".search-category__list")
    const liElements = ulElement.find(".search-category__item")
    const buttonElements = ulElement.find(".search-category__button")

    expect(divElement).toHaveLength(EXPECTED.DIV_ELEMENT_LENGTH)
    expect(ulElement).toHaveLength(EXPECTED.UL_ELEMENT_LENGTH)
    expect(liElements).toHaveLength(EXPECTED.LI_ELEMENT_LENGTH)
    expect(buttonElements).toHaveLength(EXPECTED.BUTTON_ELEMENT_LENGTH)
  })
})
