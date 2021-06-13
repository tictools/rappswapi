import React from "react"
import { shallow } from "enzyme"
import { createEnzymeAdapter } from "../../../../../test/enzyme-adapter"
import { FilterBar } from "../filter-bar"

createEnzymeAdapter()

describe("FilterBar", () => {
  const EXPECTED = {
    LENGTH: {
      ONE: 1,
      TWO: 2,
      THREE: 3,
    },
    TIMES: {
      ONE: 1,
    },
  }
  const onOptionChange = jest.fn()
  const onInputChange = jest.fn()

  const mockedBaseProps = {
    labels: { name: "name", films: 2 },
    onOptionChange,
    onInputChange,
  }

  test("should render elements properly", () => {
    const wrapper = shallow(<FilterBar {...mockedBaseProps} />)
    const labelElements = wrapper.find("label")
    const selectElement = wrapper.find("select")
    const optionElements = wrapper.find("option")
    const inputElement = wrapper.find("input")

    expect(labelElements).toHaveLength(EXPECTED.LENGTH.TWO)
    expect(selectElement).toHaveLength(EXPECTED.LENGTH.ONE)
    expect(optionElements).toHaveLength(EXPECTED.LENGTH.THREE)
    expect(inputElement).toHaveLength(EXPECTED.LENGTH.ONE)
  })

  test("should call onOptionChange when select value is changed", () => {
    const mockedPropsWithTitleLabel = {
      ...mockedBaseProps,
      labels: { name: "title", characters: 2 },
    }
    const wrapper = shallow(<FilterBar {...mockedPropsWithTitleLabel} />)
    const selectElement = wrapper.find("select")
    selectElement.simulate("change", { target: { value: "name" } })
    expect(onOptionChange).toHaveBeenCalledTimes(EXPECTED.TIMES.ONE)
  })

  test("should call resetInputValue when input value is changed", () => {
    const wrapper = shallow(<FilterBar {...mockedBaseProps} />)
    const buttonElement = wrapper.find("button")
    buttonElement.simulate("click")
    expect(onInputChange).toHaveBeenCalled()
  })
})
