import './topbar.css';
import {Search,Person,Chat,Notifications} from '@material-ui/icons'
import Profile from '../../pages/profile/Profile';
import { Link } from 'react-router-dom';
function Topbar() {

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link style={{textDecoration:'none'}} to={`/`}>
              <span className="logo">Facebook</span>
              </Link>
            </div>
            <div className="topbarCenter">
                 <div className="serarchbar">
                   <Search className="seachIcon"/>
                   <input placeholder="Search for friend, post or video" className="searchInput"/>
                 </div>
            </div>
            <div className="topbarRight">
               <div className="topbarLinks">
                   <Link to={`/`} style={{textDecoration:'none',color:'white'}}>
                   <span className="topbarLink">Home</span>
                   </Link>
                   <Link to={`/login`} style={{textDecoration:'none',color:'white'}}>
                   <span className="topbarLink">Timeline</span>
                   </Link>
               </div>
               <div className="topbarIcons">
                   <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                   </div>
                   <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                   </div>
                   <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                   </div>
               </div>
               <Link to={`/profile`} style={{textDecoration:'none'}}>
               <img src="/assets/Person/Person1.jpg" alt="" className="topbarImg" onClick={Profile}/>
               </Link>
            </div>
           
        </div>
    )
}

export default Topbar
