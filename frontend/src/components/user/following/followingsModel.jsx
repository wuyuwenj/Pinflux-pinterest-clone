import React, { useEffect, useState } from "react";
import { Modal } from "../../../context/Modal";
import FollowingShow from "./following";
import FollowerShow from "./follower";
import "./follow.css";

function FollowingModal({ followType, followersArr = [], followeesArr = [] }) {
  const [showModal, setShowModal] = useState(false);
  const followerCount = followersArr.length;
  const followeeCount = followeesArr.length;
  
  return (
    <>
      {followType === "following" && (
        <div className="followers" onClick={() => setShowModal(true)}>
          <span>{followerCount} followers</span>
        </div>
      )}

      {followType === "follower" && (
        <div className="followees" onClick={() => setShowModal(true)}>
          <span>{followeeCount} following</span>
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {followType === "follower" && (
            <FollowingShow
              followeesArr={followeesArr}
              setShowModal={setShowModal}
            />
          )}
          {followType === "following" && (
            <FollowerShow
              followersArr={followersArr}
              followeesArr={followeesArr}
              setShowModal={setShowModal}
            />
          )}
        </Modal>
      )}
    </>
  );
}

export default FollowingModal;
