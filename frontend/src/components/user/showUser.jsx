import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './user.css';
import { Link } from "react-router-dom";
import ShowDropDown from "./showDropdown";
import { fetchPin, getPins, fetchPins } from "../../store/pins";
import { fetchUser,fetchUsers } from "../../store/user";
import { fetchBoards, getBoards } from "../../store/boards";
import { getUser, getUsers } from "../../store/user";
import FollowButton from "./following/followbutton";
import FollowingModal from "./following/followingsModel";
import BoardCover from "../board/index/board_cover";
import Loading from "../LoadingPage/Loading";

export const FollowingContext = createContext();

export default function ShowUser() {
    const sessionUser = useSelector((state) => state.session.user)
    const [showMenu, setShowMenu] = useState(false)
    const [Following,setFollowing] = useState(false)
    const [loaded, setLoaded] = useState(false);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const { id } = useParams();
    const dispatch = useDispatch();
    const User=useSelector(getUser(id))
    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    useEffect(() => {
        Promise.all([
            dispatch(fetchPins()),
        dispatch(fetchUsers()),
        dispatch(fetchBoards(id))
        ]).then(() => {
            setLoaded(true);
        })
    }, [dispatch, id]);



    // const pins = useSelector(getPins())


    
    const boards = useSelector(getBoards) || [];
    const pins = useSelector(getPins);
    const users = useSelector(getUsers)
    const currentUser =users.find(user=>user.id===sessionUser.id)

    let followersArr;
    let followeesArr;
  
    useEffect(()=>{
        if (User && User.followings) {
            dispatch(fetchUsers());
        }
    }, [Following])
    

    useEffect(()=>{
        if (User) {
            followersArr = User.followers.map(id => {
                for (let i = 0; i < users.length; i++) {
                    if (id === users[i].id) {
                        return users[i];
                    }
                }
            }
            )
        }

        if (User) {
            followeesArr = User.followings.map(id => {
                for (let i = 0; i < users.length; i++) {
                    if (id === users[i].id) {
                        return users[i];
                    }
                }
            }
            )
        }
        setFollowing(false);
    },[users])

    if(User){
        followersArr=User.followers.map(id=>{
            for(let i=0;i<users.length;i++){
                if(id===users[i].id){
                    return users[i];
                }
            }
        }
        )
    }

    if (User) {
        followeesArr = User.followings.map(id => {
            for (let i = 0; i < users.length; i++) {
                if (id === users[i].id) {
                    return users[i];
                }
            }
        }
        )
    }
    // let imageUrl=[];
    let boardspins;
    if (boards && boards.length > 0) {
        boardspins = boards.map((board) => {
            let arr=[];
            for(let i=0;i<board.pins.length;i++){
                arr.push(pins.find((pin) => pin.id === board.pins[i]))
            }
            return arr;
        });
        // boardspins.forEach((pin,i)=>{
        //      if (boardspins[i]) {
        //          imageUrl[i] = pin.imageUrl;
        // }
        // })
       
    }
    
    if (!loaded) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <FollowingContext.Provider value={{ Following, setFollowing,currentUser }}>
                <h1 className="userpage">{User ? User.imgurl ? <img className="pfpPic" src={User.imgurl} alt="" /> : <div className="NopicBig">{User.username[0]}</div> : null}
                <br />
                <p className="username1">{User&&User.username}</p>
                    <p className="username2">@{User&&User.username}</p>
                    
                    <div className="FollowingRow">
                        {followersArr&&followersArr.length>0&&(
                            <FollowingModal followType={'following'} followersArr={followersArr} followeesArr={followeesArr} />
                    )}
                        {followersArr && followersArr.length > 0 && followeesArr && followeesArr.length > 0&&(<span className="dot">  ·  </span>)}
                        {followeesArr && followeesArr.length > 0 && (
                            <FollowingModal followType={'follower'} followeesArr={followeesArr} />

                        )}
                    </div>
                    {User && currentUser && User.email !== currentUser.email && (<FollowButton followerId={sessionUser.id} followeeId={User.id} followeesArr={currentUser.followings} Following={Following} setFollowing={setFollowing} />)

                    }
                    

                    <div>
                        {/* <Link to="/"><button>created</button></Link>
                        <Link to="/"><button>saved</button></Link> */}
                    </div>
                    {User &&sessionUser&&sessionUser.id===User.id&&(<div className="plusButton">
                            <div className="PLUS"><i onClick={openMenu} className={`fa-solid fa-plus fa-2xs`}></i></div>
                        </div>      
                    )}
                    <br />

                    {showMenu &&(<div className="plusMenu">
                    
                        <p>Create</p>
                        <Link to="/pin/create">
                            <div>Create pin</div>
                        </Link>
                        <Link to="/board/create">
                            <div>Create board</div>
                        </Link>
                    
                    </div>)}  

                    
                        
                    <p>Boards</p>
                    <div>
                        {/* {imageUrl.map((url,i) => (<Link key={boards[i].id} to={`/boards/${boards[i].id}`} className='link'><img src={url} alt="" className="boardimg"/></Link>))} */}
                        {boardspins && console.log(boardspins, "boardspins")}
                        {boards && console.log(boards, "boards")}

                        {boardspins && boards.map((url, i) => (<Link key={boards[i].id} to={`/boards/${boards[i].id}`} className='link'>
                            {/* <div className="boardContainer"> */}
                            <BoardCover pins={boardspins[i]} board={boards[i]}/>
                                
                            {/* </div> */}
                            </Link>))}

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
    )


}