import { mockedItem } from '../../../mocks/item-values-mock'
import { formatFilmModel } from '../format-film-model'

describe('formatFilmModel', () => {
  test('should return expected keys', () => {
    const EXPECTED_OUTPUT = ['title']
    const itemKeys = Object.keys(formatFilmModel(mockedItem))
    expect(itemKeys).toEqual(EXPECTED_OUTPUT)
  })
})
