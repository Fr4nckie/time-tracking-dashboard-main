import ActivityGrid from './components/ActivityGrid.jsx'
import UserPanel from './components/UserPanel.jsx'

function App() {
    return (
        <div className="dashboard">
            <UserPanel />
            <ActivityGrid />
        </div>
    )
}

export default App
