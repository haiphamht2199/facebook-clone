import Feed from "../../components/feed/Feed";
import Right from "../../components/rightbar/Right";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './home.css';
function Home() {
    return (
        <>
       <Topbar/>
       <div className="homeContainer">
       <Sidebar/>
       <Feed/>
       <Right/>
       </div>
       
       </>
    )
}

export default Home;
