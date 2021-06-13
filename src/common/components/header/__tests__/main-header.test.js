import React from "react"
import { shallow } from "enzyme"
import { createEnzymeAdapter } from "../../../../../test/enzyme-adapter"
import { MainHeader } from "../main-header"

createEnzymeAdapter()

const EXPECTED = {
  LENGTH_ZERO: 0,
  LENGTH_ONE: 1,
}
describe("Header", () => {
  const mockedBaseProps = {
    title: "foo",
    history: { action: "PUSH" },
    location: { pathname: "/" },
    match: { path: "/" },
  }

  test("should render provided title", () => {
    const wrapper = shallow(<MainHeader {...mockedBaseProps} />)
    const title = wrapper.find("h1").props().children
    expect(title).toBe("foo")
  })

  test("should hide nav element if no location is defined as prop", () => {
    const { title } = mockedBaseProps
    const wrapper = shallow(<MainHeader {...title} />)
    const headerElement = wrapper.find("h1")
    const navElement = wrapper.find("nav")

    expect(headerElement).toHaveLength(EXPECTED.LENGTH_ONE)
    expect(navElement).toHaveLength(EXPECTED.LENGTH_ZERO)
  })

  test("should hide nav element if pathname location is equal to home", () => {
    const mockedBasePropsWithPathnameToHome = {
      ...mockedBaseProps,
      location: {
        pathname: "/",
      },
    }
    const wrapper = shallow(
      <MainHeader {...mockedBasePropsWithPathnameToHome} />
    )
    const headerElement = wrapper.find("h1")
    const navElement = wrapper.find("nav")

    expect(headerElement).toHaveLength(EXPECTED.LENGTH_ONE)
    expect(navElement).toHaveLength(EXPECTED.LENGTH_ZERO)
  })

  test("should render nav element if pathname location is different to home", () => {
    const mockedBasePropsWithDifferentPathnameToHome = {
      ...mockedBaseProps,
      location: {
        pathname: "/foo",
      },
    }
    const wrapper = shallow(
      <MainHeader {...mockedBasePropsWithDifferentPathnameToHome} />
    )
    const headerElement = wrapper.find("h1")
    const navElement = wrapper.find("nav")

    expect(headerElement).toHaveLength(EXPECTED.LENGTH_ONE)
    expect(navElement).toHaveLength(EXPECTED.LENGTH_ONE)
  })
})
