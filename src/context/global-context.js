import React, { useState } from 'react'
import { DEFAULT_GLOBAL_CONTEXT, DEFAULT_STRING, INITIAL_VALUE } from '../common/constants'

const GlobalContext = React.createContext(DEFAULT_GLOBAL_CONTEXT)

const DEFAULT_CONTEXT_STATE = {
  category: DEFAULT_STRING.EMPTY,
  items: INITIAL_VALUE.LIST
}

export const GlobalContextProvider = ({children}) => {
  const [ globalState, setGlobalState] = useState(DEFAULT_CONTEXT_STATE)
  return (
  <GlobalContext.Provider value={{ globalState, setGlobalState }}>
    {children}
  </GlobalContext.Provider>
  )
}

export default GlobalContext
