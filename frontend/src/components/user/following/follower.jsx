import { useContext } from "react"
import FollowButton from "./followbutton";
import { FollowingContext } from '../showUser';
import { useSelector } from "react-redux";
import './follow.css';
export default function FollowerShow({ followersArr,followeesArr }) {
    const { Following, setFollowing, currentUser } = useContext(FollowingContext);
    const sessionUser = useSelector((state) => state.session.user)
    
    let followeesIdArr = followeesArr.map((user) => user.id);
    if (followeesIdArr !== currentUser.followings) followeesIdArr = currentUser.followings;

    return(
        <div>
            <h2 className="followmodeltitle">Followers</h2>

            {followersArr && followersArr.map((user, i) => (
                <h1 className="followRow">
                    {user.imgurl ? (
                        <img className="pfpPic" src={user.imgurl} alt="" />
                    ) : (
                        <div className="NopicSmall">{user.username[0]}</div>
                    )}
                    <p className="followRowName">{user.username}</p>
                    {user.email === sessionUser.email && (
                        <button className="youbutton">That's You!</button>
                    )}
                    <div className='followbutton'>
                        {user.email !== sessionUser.email && (<FollowButton  followeesArr={followeesIdArr} setFollowing={setFollowing} followeeId={user.id} followerId={sessionUser.id} />)}

                    </div>
                </h1>
            ))}
        </div>
    )
}