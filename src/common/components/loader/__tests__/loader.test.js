import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../../../test/enzyme-adapter'
import { DEFAULT_STRING } from '../../../constants'
import { Loader } from '../loader'
import { DarthVaderIcon } from '../../../icons'

createEnzymeAdapter()

describe('Loader', () => {
  const EXPECTED = {
    SPINNER_ELEMENT_LENGTH: 1
  }
  test('should render elements properly', () => {
    const wrapper = shallow(<Loader />)
    const spinnerElement = wrapper.find('.loader__icon--spinner')
    const paragraphElement = wrapper.find('p')

    expect(spinnerElement.hostNodes()).toHaveLength(EXPECTED.SPINNER_ELEMENT_LENGTH)
    expect(paragraphElement.hostNodes().text()).toBe(DEFAULT_STRING.LOADING)
  })
})
