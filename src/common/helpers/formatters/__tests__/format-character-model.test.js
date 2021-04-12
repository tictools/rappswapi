/* eslint-disable no-undef */
import { MAPPED_ITEMS_RESOURCE } from '../../../constants'
import { mockedItem } from '../../../mocks/item-values-mock'
import { formatCharacterModel } from '../format-character-model'

describe('formatCharacterModel', () => {
  test('should return expected key', () => {
    const [NAME] = MAPPED_ITEMS_RESOURCE.NAME_AND_FILM
    const [itemKey] = Object.keys(formatCharacterModel(mockedItem))
    expect(itemKey).toBe(NAME)
  })
})
