import React, { createContext, useContext, useState } from 'react'

const InvestigationContext = createContext()

export const InvestigationContextProvider = ({children}) => {
    const [investigators,setInvestigators]=useState([])
  return (
    <InvestigationContext.Provider value={[investigators,setInvestigators]}>
        {children}
    </InvestigationContext.Provider>
  )
}

export const useInvestigationContext = () =>useContext(InvestigationContext)