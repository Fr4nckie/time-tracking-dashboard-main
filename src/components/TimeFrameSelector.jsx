import { usePeriod } from '../hooks/usePeriod.jsx'

function TimeFrameSelector() {
    const timeFrame = ['daily', 'weekly', 'monthly']
    const { period, togglePeriod } = usePeriod()

    return (
        <ul className="selector">
            {timeFrame.map((p, index) => (
                <li
                    key={index}
                    className={`${p === period ? 'active' : null}`}
                    onClick={() => togglePeriod(p)}
                >
                    {p}
                </li>
            ))}
        </ul>
    )
}

export default TimeFrameSelector
