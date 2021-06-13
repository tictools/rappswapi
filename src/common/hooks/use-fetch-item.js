import { useEffect, useState } from "react"
import { BASE_URL } from "../constants"
import { fetchData } from "../helpers"
import { getItemModel } from "../models"

export const useFetchItem = (pathname) => {
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [RESOURCE_PATH, INDEX] = pathname.split("/").filter((value) => !!value)

  useEffect(() => {
    setIsLoading(true)
    fetchData(BASE_URL, RESOURCE_PATH, INDEX)
      .then((currentItem) => {
        const item = getItemModel(RESOURCE_PATH, currentItem)
        setItem(item)
        setIsLoading(false)
      })
      .catch(() => {
        setError(true)
        setIsLoading(false)
      })
  }, [pathname])

  return {
    item,
    error,
    isLoading,
    category: RESOURCE_PATH,
  }
}
