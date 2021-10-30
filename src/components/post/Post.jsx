import './post.css';
import {MoreVert} from '@material-ui/icons';
import {Users} from '../dummyData';
import {useState} from 'react';
export default function Post({post}) {
    const [like,setLike]=useState(post.like);
    const [islike,setIsLiked]=useState(false);
    const likeHandle=()=>{
        setLike(islike?like -1:like+1);
        setIsLiked(!islike);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""/>
                        <span className="postUsername">{Users.filter((u)=> u.id===post.userId)[0].username}</span>
                        <span className="postData">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                       <img className="postImg" src={post.photo} alt=""/>
                </div>
                <div className="postButton">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandle} alt=""/>
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandle} alt=""/>
                        <span className="postLikeCouter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommemText">{post.coment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


