import '../styles/time-frame-selector.scss'
import { usePeriod } from '../hooks/usePeriod.jsx'

function TimeFrameSelector() {
    const timeFrame = ['daily', 'weekly', 'monthly']
    const { period, changePeriod } = usePeriod()

    return (
        <ul className="selector">
            {timeFrame.map((p, index) => (
                <li
                    role="button"
                    key={index}
                    className={`${p === period ? 'active' : null}`}
                    onClick={() => changePeriod(p)}
                >
                    {p}
                </li>
            ))}
        </ul>
    )
}

export default TimeFrameSelector
