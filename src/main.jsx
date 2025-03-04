import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.jsx'
import { PeriodContextProvider } from './hooks/usePeriod.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PeriodContextProvider>
            <App />
        </PeriodContextProvider>
    </StrictMode>
)
