import { useState, useEffect, useContext } from 'react'
import GlobalContext from '../../context/global-context'
import { fetchData, formatDataFromArray } from '../helpers'
import { BASE_URL } from '../constants'

export const useFetchCategory = () => {
  const {globalState, setGlobalState} = useContext(GlobalContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchCategory()
  }, [globalState.category])

  const fetchCategory = () => {
    setIsLoading(true)
    !!globalState.category && fetchData(BASE_URL, globalState.category, undefined)
      .then(data => {
        setGlobalState({
          ...globalState,
          items: formatDataFromArray(data)
        })
        setError(false)
        setIsLoading(false)
      })
      .catch(errorResponse => {
        setIsLoading(false)
        setError(true)
      })
  }
  return { isLoading, error }
}


