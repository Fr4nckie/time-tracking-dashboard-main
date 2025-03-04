import avatar from '../assets/image-jeremy.png'
export default function UserProfile() {
    return (
        <div className="profile">
            <img src={avatar} alt="profile pic" className="profile__avatar" />
            <div className="profile__name">
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
    )
}
