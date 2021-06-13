import React from "react"
import { Link } from "react-router-dom"
import { shallow } from "enzyme"
import { createEnzymeAdapter } from "../../../../../test/enzyme-adapter"
import { CategoryItems } from "../category-items"

createEnzymeAdapter()

describe("ItemsList", () => {
  const EXPECTED = {
    PARAGRAPH_ELEMENT_LENGTH: 2,
    LI_ELEMENT_LENGTH: 3,
  }
  const mockedItemsWithNameKey = [
    { name: "foo-name", quantity: 1 },
    { name: "bar-name", quantity: 2 },
    { name: "buzz-name", quantity: 3 },
  ]

  const mockedItemsWithTitleKey = [
    { title: "foo-title", quantity: 1 },
    { title: "bar-title", quantity: 2 },
    { title: "buzz-title", quantity: 3 },
  ]

  const mockedLabelsWithName = {
    name: "name",
    quantity: "quantity",
  }
  const mockedLabelsWithTitle = {
    title: "title",
    quantity: "quantity",
  }

  test("should render elements properly", () => {
    const mockedBaseProps = {
      data: mockedItemsWithNameKey,
      labels: mockedLabelsWithName,
    }
    const wrapper = shallow(<CategoryItems {...mockedBaseProps} />)
    const liElement = wrapper.find("li")
    const liElementFirstHostNode = liElement.hostNodes().at(0)

    expect(liElement).toHaveLength(EXPECTED.LI_ELEMENT_LENGTH)
    expect(liElementFirstHostNode.props().children[0].type).toEqual("p")
    expect(liElementFirstHostNode.props().children[1].type).toEqual(Link)
  })

  test("should render values properly when category has TITLE key", () => {
    const mockedPropsWithTitleKey = {
      data: mockedItemsWithTitleKey,
      labels: mockedLabelsWithTitle,
    }

    const wrapper = shallow(<CategoryItems {...mockedPropsWithTitleKey} />)
    const elements = wrapper.find("li")
    const firstElementLabel = elements.hostNodes().at(0).props().children[0]
      .props.children.props.children[1]
    const secondElementLabel = elements.hostNodes().at(1).props().children[0]
      .props.children.props.children[1]
    const thirdElementLabel = elements.hostNodes().at(2).props().children[0]
      .props.children.props.children[1]
    console.log("ELEMENT => ", thirdElementLabel)
    expect(firstElementLabel).toBe("foo-title")
    expect(secondElementLabel).toBe("bar-title")
    expect(thirdElementLabel).toBe("buzz-title")
  })

  test("should render values properly when category has NAME key", () => {
    const mockedPropsWithNameKey = {
      data: mockedItemsWithNameKey,
      labels: mockedLabelsWithName,
    }

    const wrapper = shallow(<CategoryItems {...mockedPropsWithNameKey} />)
    const elements = wrapper.find("li")
    const firstElementLabel = elements.hostNodes().at(0).props().children[0]
      .props.children.props.children[1]
    const secondElementLabel = elements.hostNodes().at(1).props().children[0]
      .props.children.props.children[1]
    const thirdElementLabel = elements.hostNodes().at(2).props().children[0]
      .props.children.props.children[1]

    expect(firstElementLabel).toBe("foo-name")
    expect(secondElementLabel).toBe("bar-name")
    expect(thirdElementLabel).toBe("buzz-name")
  })
})
