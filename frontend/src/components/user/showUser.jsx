import { useEffect, useState, createContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPins } from "../../store/pins";
import { getBoards } from "../../store/boards";
import { getUser, getUsers } from "../../store/user";
import FollowButton from "./following/followbutton";
import FollowingModal from "./following/followingsModel";
import BoardCover from "../board/index/board_cover";
import Loading from "../LoadingPage/Loading";
import { useFetchPins } from "../../hooks/useFetchPins";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { useFetchBoards } from "../../hooks/useFetchBoards";
import "./user.css";

export const FollowingContext = createContext();

export default function ShowUser({ userId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const [Following, setFollowing] = useState(false);
  const [loadingPins, setLoadingPins] = useState(true);
  const [loadingBoards, setLoadingBoards] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const { id } = useParams();

  useFetchPins(setLoadingPins);
  const pins = useSelector(getPins);
  useFetchUsers({ setLoadingUsers, dependency: Following }); //fetching users again everytime the user follows/unfollows someone
  useFetchBoards({ id, setLoadingBoards });

  const boards = useSelector(getBoards);
  const users = useSelector(getUsers);
  const User = useSelector(getUser(id));

  const currentUser = users.find((user) => user.id === sessionUser.id);
  const followersArr = useMemo(() => {
    if (!User) return;
    return User.followers.map((id) => {
      for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
          return users[i];
        }
      }
    });
  }, [User]);

  const followeesArr = useMemo(() => {
    if (!User) return;
    return User.followings.map((id) => {
      for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
          return users[i];
        }
      }
    });
  }, [User]);

  const boardspins = useMemo(() => {
    return boards.map((board) => {
      let arr = [];
      for (let i = 0; i < board.pins.length; i++) {
        arr.push(pins.find((pin) => pin.id === board.pins[i]));
      }
      return arr;
    });
  }, [boards, pins]);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  if (loadingPins || loadingBoards || loadingUsers) {
    return <Loading />;
  } else {
    return (
      <div>
        <FollowingContext.Provider
          value={{ Following, setFollowing, currentUser }}
        >
          <h1 className="userpage">
            {User ? (
              User.imgurl ? (
                <img className="pfpPic" src={User.imgurl} alt="" />
              ) : (
                <div className="NopicBig">{User.username[0]}</div>
              )
            ) : null}
            <br />
            <p className="username1">{User && User.username}</p>
            <p className="username2">@{User && User.username}</p>

            <div className="FollowingRow">
              {followersArr && followersArr.length > 0 && (
                <FollowingModal
                  followType={"following"}
                  followersArr={followersArr}
                  followeesArr={followeesArr}
                />
              )}
              {followeesArr &&
                followersArr &&
                followersArr.length > 0 &&
                followeesArr.length > 0 && <span className="dot"> · </span>}
              {followeesArr && followeesArr.length > 0 && (
                <FollowingModal
                  followType={"follower"}
                  followeesArr={followeesArr}
                />
              )}
            </div>
            {User && currentUser && User.email !== currentUser.email && (
              <FollowButton
                followerId={sessionUser.id}
                followeeId={User.id}
                followeesArr={currentUser.followings}
                Following={Following}
                setFollowing={setFollowing}
              />
            )}

            <div>
            </div>
            {User && sessionUser && sessionUser.id === User.id && (
              <div className="plusButton">
                <div className="PLUS">
                  <i
                    onClick={openMenu}
                    className={`fa-solid fa-plus fa-2xs`}
                  ></i>
                </div>
              </div>
            )}
            <br />

            {showMenu && (
              <div className="plusMenu">
                <p>Create</p>
                <Link to="/pin/create">
                  <div>Create pin</div>
                </Link>
                <Link to="/board/create">
                  <div>Create board</div>
                </Link>
              </div>
            )}

            <p>Boards</p>
            <div>
              {boardspins &&
                boards.map((url, i) => (
                  <Link
                    key={boards[i].id}
                    to={`/boards/${boards[i].id}`}
                    className="link"
                  >
                    <BoardCover pins={boardspins[i]} board={boards[i]} />
                  </Link>
                ))}
            </div>
          </h1>
        </FollowingContext.Provider>
      </div>
    );
  }
}
