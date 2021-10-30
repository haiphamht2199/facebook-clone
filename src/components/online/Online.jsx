import './online.css'
function Online({user}) {
    return (
        <li className="rightBarFriend">
                       <div className="rightBarImgContainer">
                           <img className="rightBarProfileImg" src={user.profilePicture} alt=""/>
                           <span className="rghtbarOnline"></span>
                       </div>
                       <span className="rightbarUsername">{user.username}</span>
                       </li>
    )
}

export default Online
