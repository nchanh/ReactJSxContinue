import { useReducer } from "react"
import Context from "./Context";
import logger from "./logger";
import reducer, { initState } from "./reducer"

function Provider({ children }) {
  const [state, setState] = useReducer(logger(reducer), initState)

  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  )
}

export default Provider