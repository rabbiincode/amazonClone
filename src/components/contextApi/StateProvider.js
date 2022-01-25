import { createContext, useContext, useReducer } from "react";

//Prepares the data layout
export const StateContext = createContext()

//Wrap the App component and provide the Data layout, so every components gets access to the Data
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}


//Pull information from the Data layout
export const useStateValue = () => useContext(StateContext)