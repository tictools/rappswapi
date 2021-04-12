import { formatDataFromArray } from '../format-data-from-array'

describe('formatDataFromArray', () => {
  const EXPECTED_OUTPUT = {
    WITHOUT_LENGTH: 0,
    WITH_LENGTH: 3
  }
  const EXPECTED_OUTPUT_WITH_NAME_KEY = [
    { name: 'foo', films: 3, resourcePath: 'planets', index: '1' },
    { name: 'bar', films: 5, resourcePath: 'planets', index: '2' },
    { name: 'buzz', films: 2, resourcePath: 'planets', index: '3' }
  ]
  const EXPECTED_OUTPUT_WITH_TITLE_KEY = [
    { title: 'foo', characters: 2, resourcePath: 'films', index: '1' },
    { title: 'bar', characters: 1, resourcePath: 'films', index: '2' },
    { title: 'buzz', characters: 3, resourcePath: 'films', index: '3' }
  ]

  test('should return expected output when no array is provided', () => {
    const formattedData = formatDataFromArray(undefined)
    expect(formattedData).toBeInstanceOf(Array)
    expect(formattedData).toHaveLength(EXPECTED_OUTPUT.WITHOUT_LENGTH)
  })

  test('should return expected output when array is provided without RESULTS', () => {
    const mockedDataWithoutResults = {
      results: []
    }
    const formattedData = formatDataFromArray(mockedDataWithoutResults)
    expect(formattedData).toBeInstanceOf(Array)
    expect(formattedData).toHaveLength(EXPECTED_OUTPUT.WITHOUT_LENGTH)
  })

  test('should return expected output when item has NAME key', () => {
    const mockedDataWithNameKey = {
      results: [
        {
          name: 'foo',
          active: true,
          films: [1, 2, 3],
          url: 'http://swapi.dev/api/planets/1/'
        },
        {
          name: 'bar',
          active: false,
          films: [1, 2, 3, 4, 5],
          url: 'http://swapi.dev/api/planets/2/'
        },
        {
          name: 'buzz',
          active: true,
          films: [1, 2],
          url: 'http://swapi.dev/api/planets/3/'
        }
      ]
    }

    const formattedData = formatDataFromArray(mockedDataWithNameKey)
    expect(formattedData).toBeInstanceOf(Array)
    expect(formattedData).toHaveLength(EXPECTED_OUTPUT.WITH_LENGTH)
    expect(formattedData).toEqual(EXPECTED_OUTPUT_WITH_NAME_KEY)
  })

  test('should return expected output when item has TITLE key', () => {
    const mockedDataWithTitleKey = {
      results: [
        {
          title: 'foo',
          active: true,
          characters: [1, 2],
          url: 'http://swapi.dev/api/films/1/'
        },
        {
          title: 'bar',
          active: false,
          characters: [1],
          url: 'http://swapi.dev/api/films/2/'
        },
        {
          title: 'buzz',
          active: true,
          characters: [1, 2, 3],
          url: 'http://swapi.dev/api/films/3/'
        }
      ]
    }

    const formattedData = formatDataFromArray(mockedDataWithTitleKey)
    expect(formattedData).toBeInstanceOf(Array)
    expect(formattedData).toHaveLength(EXPECTED_OUTPUT.WITH_LENGTH)
    expect(formattedData).toEqual(EXPECTED_OUTPUT_WITH_TITLE_KEY)
  })
})
