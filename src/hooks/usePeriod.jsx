/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { createContext } from 'react'

const PeriodContext = createContext({
    period: 'weekly',
    togglePeriod: () => {}
})

export const usePeriod = () => {
    const { period, togglePeriod } = useContext(PeriodContext)

    return { period, togglePeriod }
}

export function PeriodContextProvider({ children }) {
    const [period, setPeriod] = useState('weekly')

    const togglePeriod = (period) => {
        setPeriod(period)
    }

    return (
        <PeriodContext.Provider value={{ period, togglePeriod }}>
            {children}
        </PeriodContext.Provider>
    )
}
