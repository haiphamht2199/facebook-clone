import { Users } from '../dummyData';
import Online from '../online/Online';
import './right.css';

function Right({profile}) {
    const HomeRightbar=()=>{
        return (
            <>
             <div className="birtdayContainer">
                    <img className="birtdayImg" src="assets/birtday.jpg" alt=""/>
                    <span className="birtdayText">
                        <b>Dinh Huy</b> and <b>3 other friends </b>have a birtday today</span>
                </div>
                <img className="rightbarAd" src="assets/add.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Friend</h4>
                <ul className="rightbarFriendList">
                  {Users.map(u =>(
                      <Online kry={u.id} user={u}/>
                  ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar=()=>{
        return (
            <>
            <h4 className="rightbarTitle">User Infomation</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoKey">Viet Nam</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoKey">Ha Tinh</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoKey">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                 <div className="rightbarFollowing">
                     <img src="assets/Person/Person1.jpg" alt="" className="rightbarFollowingImg"/>
                     <span className="rightbarFollowingName">Hai Pham</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/Person/Person2.jpg" alt="" className="rightbarFollowingImg"/>
                     <span className="rightbarFollowingName">Huy Pham</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/Person/Person3.jpg" alt="" className="rightbarFollowingImg"/>
                     <span className="rightbarFollowingName">An Pham</span>
                 </div>
                
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {profile?<ProfileRightbar/>:<HomeRightbar/>}
            </div>
        </div>
    )
}

export default Right
