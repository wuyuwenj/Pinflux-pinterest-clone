import { useDispatch } from "react-redux";
import { addFollow } from "../../../store/follows";
import { deleteFollow } from "../../../store/follows";
import { useState } from "react";
import "./follow.css";
export default function FollowButton(props) {
  const { followeeId, followerId, followeesArr, setFollowing } = props;
  const [status, setStatus] = useState(null)
  if (status === null && followeesArr.includes(followeeId)) {
    setStatus("Following");
  } else if (status === null) {
    setStatus("Follow");
  }
  const dispatch = useDispatch();
  const handleFollow = (e) => {
    e.preventDefault();
    if (status === "Follow") {
      dispatch(addFollow(followeeId, followerId));
      setFollowing(true);
      setStatus("Following");
    } else {
      dispatch(deleteFollow(followeeId, followerId));
      setFollowing(true);
      setStatus("Follow");
    }
  };
  return (
    <div>
      <button
        onClick={handleFollow}
        className={
          status === "Follow" ? "FollowButton red" : "FollowButton black"
        }
      >
        <p>{status}</p>
      </button>
    </div>
  );
}
