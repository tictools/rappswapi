import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  DEFAULT_GLOBAL_CONTEXT,
  DEFAULT_STRING,
  INITIAL_VALUE,
} from "../common/constants"

const propTypes = {
  children: PropTypes.node.isRequired,
}

const DEFAULT_CONTEXT_STATE = {
  category: DEFAULT_STRING.EMPTY,
  items: INITIAL_VALUE.LIST,
}

const GlobalContext = React.createContext(DEFAULT_GLOBAL_CONTEXT)

export const GlobalContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(DEFAULT_CONTEXT_STATE)
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = propTypes

export default GlobalContext
