import { filterArrayByName } from '../filter-array-by-name'

describe('filterArrayByName', () => {
  const EXPECTED_RESULT = {
    EMPTY_LIST: []
  }

  const mockedFilter = 'foo'
  const mockedData = [
    { name: 'foo', films: 1 },
    { name: 'bar', films: 2 },
    { name: 'foobar', films: 3 }
  ]

  test('should return expected result when no data is received', () => {
    const mockedEmptyData = undefined
    const filteredData = filterArrayByName(mockedFilter, mockedEmptyData)
    expect(filteredData).toEqual(EXPECTED_RESULT.EMPTY_LIST)
  })

  test('should return expected result when no filter is received', () => {
    const mockedEmptyFilter = ''
    const filteredData = filterArrayByName(mockedEmptyFilter, mockedData)
    expect(filteredData).toEqual(EXPECTED_RESULT.EMPTY_LIST)
  })

  test('should return result filtered as expected', () => {
    const filteredData = filterArrayByName(mockedFilter, mockedData)
    expect(filteredData).toEqual([{ name: 'foo', films: 1 }, { name: 'foobar', films: 3 }])
  })
})
