/* eslint-disable react/prop-types */
import { useCallback, useContext, useState } from 'react'
import { createContext } from 'react'

const PeriodContext = createContext({
    period: 'weekly',
    changePeriod: () => {}
})

export const usePeriod = () => {
    return useContext(PeriodContext)
}

export function PeriodContextProvider({ children }) {
    const [period, setPeriod] = useState('weekly')

    const changePeriod = useCallback((newPeriod) => {
        setPeriod(newPeriod)
    },[])

    return (
        <PeriodContext.Provider value={{ period, changePeriod }}>
            {children}
        </PeriodContext.Provider>
    )
}
