import { useEffect, useState, createContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./user.css";
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
export const FollowingContext = createContext();

export default function ShowUser({ userId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const [Following, setFollowing] = useState(false);
  const [loadingPins, setLoadingPins] = useState(true);
  const [loadingBoards, setLoadingBoards] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const { id } = useParams();
  const User = useSelector(getUser(id));

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useFetchPins(setLoadingPins);
  useFetchUsers({ setLoadingUsers, dependencies: [Following] }); //fetching users again everytime the user follows/unfollows someone
  useFetchBoards({ id: userId, setLoadingBoards });

  const boards = useSelector(getBoards);
  const pins = useSelector(getPins);
  const users = useSelector(getUsers);
  const currentUser = users.find((user) => user.id === sessionUser.id);

  const followersArr = useMemo(() => {
    User.followers.map((id) => {
      for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
          return users[i];
        }
      }
    });
  }, [User]);

  const followeesArr = useMemo(() => {
    User.followings.map((id) => {
      for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
          return users[i];
        }
      }
    });
  }, [User]);

  const boardspins = useMemo(() => {
    boards.map((board) => {
      let arr = [];
      for (let i = 0; i < board.pins.length; i++) {
        arr.push(pins.find((pin) => pin.id === board.pins[i]));
      }
      return arr;
    });
  }, [boards]);

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
              {followersArr.length > 0 && (
                <FollowingModal
                  followType={"following"}
                  followersArr={followersArr}
                  followeesArr={followeesArr}
                />
              )}
              {followersArr.length > 0 && followeesArr.length > 0 && (
                <span className="dot"> · </span>
              )}
              {followeesArr.length > 0 && (
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
              {/* <Link to="/"><button>created</button></Link>
                            <Link to="/"><button>saved</button></Link> */}
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
              {/* {imageUrl.map((url,i) => (<Link key={boards[i].id} to={`/boards/${boards[i].id}`} className='link'><img src={url} alt="" className="boardimg"/></Link>))} */}

              {boardspins &&
                boards.map((url, i) => (
                  <Link
                    key={boards[i].id}
                    to={`/boards/${boards[i].id}`}
                    className="link"
                  >
                    {/* <div className="boardContainer"> */}
                    <BoardCover pins={boardspins[i]} board={boards[i]} />

                    {/* </div> */}
                  </Link>
                ))}

              {/* {boards.each(board=>(<img ></img>))} */}
            </div>
            {/* <table>
                            <tbody>    
                                <td><Link to="">created</Link></td>
                                <td><button>saved</button></td>
                            </tbody>
                        </table> */}
          </h1>
        </FollowingContext.Provider>
      </div>
    );
  }
}
