/* eslint-disable react/prop-types */
import '../styles/activity-card.scss'
import option from '../assets/icon-ellipsis.svg'
import { usePeriod } from '../hooks/usePeriod.jsx'
import { getFormattedHours } from '../utils/getFormattedHours.js'
import { slugify } from '../utils/slugify.js'

const images = import.meta.glob('../assets/*.svg', { eager: true })

export default function ActivityCard({ activity }) {
    const imageSrc = images[`../assets/${activity.image}`]?.default
    const { period } = usePeriod()

    const periodLabels = {
        daily: 'Last day',
        weekly: 'Last week',
        monthly: 'Last month'
    }

    const { current, previous } = activity.timeframes[period] || {}

    return (
        activity && (
            <div className={`activity-card ${slugify(activity.title)}`}>
                <div className="activity-card__icon">
                    <img src={imageSrc} alt={`${activity.title} icon`} />
                </div>
                <div className="activity-card__content">
                    <div className="activity-card__header">
                        <h3>{activity.title}</h3>
                        <button>
                            <img src={option} alt="ellipsis" />
                        </button>
                    </div>
                    <div className="activity-card__details">
                        <p className="current">{getFormattedHours(current)}</p>
                        <p className="previous">
                            {periodLabels[period]} -{' '}
                            {getFormattedHours(previous)}
                        </p>
                    </div>
                </div>
            </div>
        )
    )
}
