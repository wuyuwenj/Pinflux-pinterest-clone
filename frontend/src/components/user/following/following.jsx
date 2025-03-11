import { useContext } from "react";
import FollowButton from "./followbutton";
import { FollowingContext } from "../showUser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./follow.css";
export default function FollowingShow({ followeesArr, setShowModal }) {
  const { setFollowing, currentUser } = useContext(FollowingContext);
  const sessionUser = useSelector((state) => state.session.user);
  let followeesIdArr = followeesArr.map((user) => user.id);
  if (followeesIdArr !== currentUser.followings)
    followeesIdArr = currentUser.followings;
  return (
    <div>
      <h2 className="followmodeltitle">Following</h2>
      {followeesArr &&
        followeesArr.map((user, i) => (
          <h1 className="followRow">
            {user.imgurl ? (
              <img className="pfpPic" src={user.imgurl} alt="" />
            ) : (
              <div onClick={() => setShowModal(false)}>
                <Link to={`/user/${user.id}`}>
                  <div className="NopicSmall">{user.username[0]}</div>
                </Link>
              </div>
            )}
            <div onClick={() => setShowModal(false)}>
              <Link to={`/user/${user.id}`}>
                <p className="followRowName">{user.username}</p>
              </Link>
            </div>
            {user.email === sessionUser.email && (
              <button className="youbutton">That's You!</button>
            )}
            <div className="followbutton">
              {user.email !== sessionUser.email && (
                <FollowButton
                  followeesArr={followeesIdArr}
                  setFollowing={setFollowing}
                  followeeId={user.id}
                  followerId={sessionUser.id}
                />
              )}
            </div>
          </h1>
        ))}
    </div>
  );
}
