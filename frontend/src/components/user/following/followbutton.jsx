import { useDispatch } from "react-redux";
import { addFollow } from "../../../store/follows";
import { deleteFollow } from "../../../store/follows";
import "./follow.css";
export default function FollowButton(props) {
  const { followeeId, followerId, followeesArr, setFollowing } = props;
  let status = null;
  if (status === null && followeesArr.includes(followeeId)) {
    status = "Following";
  } else if (status === null) {
    status = "Follow";
  }
  const dispatch = useDispatch();
  const handleFollow = (e) => {
    e.preventDefault();
    if (status === "Follow") {
      dispatch(addFollow(followeeId, followerId));
      setFollowing(true);
      status = "Following";
    } else {
      dispatch(deleteFollow(followeeId, followerId));
      setFollowing(true);
      status = "Follow";
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
