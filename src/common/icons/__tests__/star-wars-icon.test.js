import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../../test/enzyme-adapter'
import { StarWarsIcon } from '../star-wars-icon'

createEnzymeAdapter()

describe('<StarWarsIcon />', () => {
  const mockedBaseProps = {
    size: 150
  }

  test('should get the correct StarWarsIcon path', () => {
    const wrapper = shallow(<StarWarsIcon {...mockedBaseProps} />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
