import '../styles/activity-grid.scss'
import data from '../../data.json'
import ActivityCard from './ActivityCard.jsx'
function ActivityGrid() {
    return (
        <div className="activity-grid">
            {data.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
            ))}
        </div>
    )
}

export default ActivityGrid
