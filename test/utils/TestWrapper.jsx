/* eslint-disable react/prop-types */
import { PeriodContextProvider } from '../../src/hooks/usePeriod.jsx'

export const TestWrapper = ({ children }) => {
    return <PeriodContextProvider>{children}</PeriodContextProvider>
}
