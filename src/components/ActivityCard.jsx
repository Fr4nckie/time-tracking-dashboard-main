/* eslint-disable react/prop-types */
import option from '../assets/icon-ellipsis.svg'
import { usePeriod } from '../hooks/usePeriod.jsx'
import { getFormattedHours } from '../utils/getFormattedHours.js'
import { slugify } from '../utils/slugify.js'

function ActivityCard({ activity }) {
    const { period } = usePeriod()
    const currentTime = activity.timeframes[period].current
    const previousTime = activity.timeframes[period].previous

    return (
        <div className={`activity-card ${slugify(activity.title)}`}>
            <div className="activity-card__icon">
                <img src={activity.image} alt={`${activity.title} icon`} />
            </div>
            <div className="activity-card__content">
                <div className="activity-card__header">
                    <h3>{activity.title}</h3>
                    <button>
                        <img src={option} alt="ellipsis" />
                    </button>
                </div>
                <div className="activity-card__details">
                    <p className="current">{getFormattedHours(currentTime)}</p>
                    <p className="previous">
                        Last week - {getFormattedHours(previousTime)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard
