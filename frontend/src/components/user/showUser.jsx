import { useEffect,useState } from "react";
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
export default function ShowUser() {
    const sessionUser = useSelector((state) => state.session.user)
    const [showMenu, setShowMenu] = useState(false)
    const [Following,setFollowing] = useState(false)
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const { id } = useParams();
    const dispatch = useDispatch();
    const User=useSelector(getUser(id))
    console.log(User,"user")
    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    useEffect(()=>{
        console.log(Following);
    })
    
    useEffect(() => {
        dispatch(fetchBoards(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchPins());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // const pins = useSelector(getPins())


    
    const boards = useSelector(getBoards) || [];
    const pins = useSelector(getPins);
    const users = useSelector(getUsers)
    const currentUser =users.find(user=>user.id===sessionUser.id)

    let followersArr;
    let followeesArr;
  
    useEffect(()=>{
        console.log('pass')
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
    let imageUrl=[];
    if (boards && boards.length > 0) {
        const boardspins = boards.map((board) => {
            return pins.find((pin) => pin.id === board.pins[0]);
        });
        boardspins.forEach((pin,i)=>{
             if (boardspins[i]) {
                 imageUrl[i] = pin.imageUrl;
        }
        })
       
    }
    

    return (
        <div>
            <h1 className="userpage">{User ? User.imgurl ? <img className="pfpPic" src={User.imgurl} alt="" /> : <div className="NopicBig">{User.username[0]}</div> : null}
               <br />
               <p className="username1">{User&&User.username}</p>
                <p className="username2">@{User&&User.username}</p>
                
                <div className="FollowingRow">
                    {followersArr&&followersArr.length>0&&(
                    <div className="followers">
                        <span>{followersArr.length} followers</span>
                    </div>
                )}
                    {followersArr && followersArr.length > 0 && followeesArr && followeesArr.length > 0&&(<span className="dot">  ·  </span>)}
                    {followeesArr && followeesArr.length > 0 && (
                        <div className="followees">
                            <span>{User.followings.length} following</span>
                        </div>
                    )}
                </div>
                {/* {console.log(User,sessionUser)} */}
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
                    {imageUrl.map((url,i) => (<Link key={boards[i].id} to={`/boards/${boards[i].id}`} className='link'><img src={url} alt="" className="boardimg"/></Link>))}
                    
                    {/* {boards.each(board=>(<img ></img>))} */}
                </div>
                {/* <table>
                    <tbody>    
                        <td><Link to="">created</Link></td>
                        <td><button>saved</button></td>
                    </tbody>
                </table> */}
            </h1>
         

        </div>
    )


}