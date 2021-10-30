import './profile.css'
import Feed from "../../components/feed/Feed";
import Right from "../../components/rightbar/Right";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img
                 className="profileCoverImg" 
                 src="assets/Post/3.jfif"
                  alt=""/>
                <img 
                className="profileUserImg"
                 src="assets/Person/Person6.jpg" 
                 alt=""/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Hang Pham</h4>
                    <span className="profileInfoDesc">Hello my Friend</span>
                </div>
            
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Right profile/>
            </div>
        </div>
    
        </div>
        
        </>
    )
}

export default Profile
