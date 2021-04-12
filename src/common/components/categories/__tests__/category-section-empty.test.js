import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../../../test/enzyme-adapter'
import { DEFAULT_STRING } from '../../../constants'
import { DarthVaderIcon } from '../../../icons'
import { CategorySectionEmpty } from '../category-section-empty'

createEnzymeAdapter()

describe('CategorySectionEmpty', () => {
  const EXPECTED = {
    ICON_LENGTH: 1,
    TEXT_LENGTH: 1
  }
  test('should render elements properly', () => {
    const wrapper = shallow(<CategorySectionEmpty />)
    const iconElement = wrapper.find(DarthVaderIcon)
    const paragraphElement = wrapper.find('p')
    const text = paragraphElement.hostNodes().text()

    expect(iconElement).toHaveLength(EXPECTED.ICON_LENGTH)
    expect(paragraphElement).toHaveLength(EXPECTED.TEXT_LENGTH)
    expect(text).toBe(DEFAULT_STRING.EMPTY_CATEGORY)
  })
})
