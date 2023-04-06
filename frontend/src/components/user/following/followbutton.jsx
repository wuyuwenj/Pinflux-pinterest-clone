import { useDispatch } from "react-redux";
import { addFollow } from "../../../store/follows";
import { useState } from "react";
import { deleteFollow } from "../../../store/follows";
import './follow.css';
export default function FollowButton(props){
    const { followeeId, followerId, followeesArr, setFollowing}=props;
    // const [status,setStatus]=useState(null)
    let status=null;
    if(status===null&&followeesArr.includes(followeeId)){
        // setStatus('Following')
        status='Following'
    } else if (status === null){
        // setStatus('Follow')
        status='Follow'
    }
    const dispatch=useDispatch();
    const handleFollow=(e)=>{
        e.preventDefault();
        if(status==='Follow'){
            dispatch(addFollow(followeeId,followerId));
            setFollowing(true)
            // setStatus('Following')
            status = 'Following'

        }else{

            dispatch(deleteFollow(followeeId, followerId));
            setFollowing(true)
            // setStatus('Follow')
            status = 'Follow'

        }

    }
    return(
        <div>
            <button onClick={handleFollow} className={status === "Follow" ? "FollowButton red" : "FollowButton black"}>
                <p>{status}</p>
            </button>
        </div>
    )
}