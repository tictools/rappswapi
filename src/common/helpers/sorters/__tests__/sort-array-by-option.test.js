import { sortArray } from '../sort-array'

describe('sortArrayByOption', () => {
  const EXPECTED = {
    EMPTY_LENGTH: 0
  }

  const KEY = {
    NAME: 'name',
    QUANTITY: 'quantity'
  }

  const mockedData = [
    {
      [KEY.NAME]: 'foo',
      [KEY.QUANTITY]: 2
    },
    {
      [KEY.NAME]: 'bar',
      [KEY.QUANTITY]: 3
    }, {
      [KEY.NAME]: 'buzz',
      [KEY.QUANTITY]: 1
    }
  ]

  test('should return an empty array if no data is provided ', () => {
    const sortedDataWithoutDataProvided = sortArray(undefined, KEY.NAME)
    expect(sortedDataWithoutDataProvided).toHaveLength(EXPECTED.EMPTY_LENGTH)
  })

  test('should return an empty array if no option is provided ', () => {
    const sortedDataWithoutDataProvided = sortArray(mockedData, undefined)
    expect(sortedDataWithoutDataProvided).toHaveLength(EXPECTED.EMPTY_LENGTH)
  })

  test('should return array sorted by name', () => {
    const sortedDataByName = sortArray(mockedData, KEY.NAME)
    expect(sortedDataByName[0].name).toBe('bar')
    expect(sortedDataByName[1].name).toBe('buzz')
    expect(sortedDataByName[2].name).toBe('foo')
  })

  test('should return array sorted by quantity', () => {
    const sortedDataByQuantity = sortArray(mockedData, KEY.QUANTITY)
    expect(sortedDataByQuantity[0].name).toBe('buzz')
    expect(sortedDataByQuantity[1].name).toBe('foo')
    expect(sortedDataByQuantity[2].name).toBe('bar')
  })

  test('should return array sorted when two items are equal', () => {
    const mockedDataWithSameQuantity = [
      {
        [KEY.NAME]: 'foo',
        [KEY.QUANTITY]: 2
      },
      {
        [KEY.NAME]: 'bar',
        [KEY.QUANTITY]: 2
      }, {
        [KEY.NAME]: 'buzz',
        [KEY.QUANTITY]: 1
      }
    ]
    const sortedDataByQuantity = sortArray(mockedDataWithSameQuantity, KEY.QUANTITY)
    expect(sortedDataByQuantity[0].name).toBe('buzz')
    expect(sortedDataByQuantity[1].name).toBe('foo')
    expect(sortedDataByQuantity[2].name).toBe('bar')
  })
})
