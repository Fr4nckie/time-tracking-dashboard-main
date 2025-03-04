import '../styles/user-panel.scss'
import TimeFrameSelector from './TimeFrameSelector.jsx'
import UserProfile from './UserProfile.jsx'
function UserPanel() {
    return (
        <div className="user-panel">
            <UserProfile />
            <TimeFrameSelector />
        </div>
    )
}


export default UserPanel
