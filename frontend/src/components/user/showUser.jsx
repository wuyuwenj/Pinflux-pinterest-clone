import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './user.css';
import { Link } from "react-router-dom";
import ShowDropDown from "./showDropdown";
import { fetchPin, getPins, fetchPins } from "../../store/pins";
import { fetchUser } from "../../store/user";
import { fetchBoards, getBoards } from "../../store/boards";
export default function ShowUser() {
    const sessionUser = useSelector((state) => state.session.user)

    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const { id } = useParams();
    // console.log(id, 'idshowpin')
    const dispatch = useDispatch();

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    
    useEffect(() => {
        dispatch(fetchBoards())
        dispatch(fetchPins());
        
        // await dispatch(fetchPin(id));
        // dispatch(fetchUser(id))
    }, [id])
    // console.log(current)
    // const pins = useSelector(getPins())

    // console.log(pins, "SHOWPIN")
    
    const boards = useSelector(getBoards) || [];
    const pins = useSelector(getPins);

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
            <h1 className="userpage">{sessionUser.imgurl ? <img className="pfpPic" src={sessionUser.imgurl} alt="" /> : <div className="NopicBig">{sessionUser.username[0]}</div>}
               <br />
               <p className="username1">{sessionUser.username}</p>
                <p className="username2">@{sessionUser.username}</p>
                
                <div>
                    {/* <Link to="/"><button>created</button></Link>
                    <Link to="/"><button>saved</button></Link> */}
                </div>
                    <div className="plusButton">
                        <div className="PLUS"><i onClick={openMenu} className={`fa-solid fa-plus fa-2xs`}></i></div>
                    </div>
                      
                <br />
                 {showMenu && (<div className="plusMenu">
                   
                    <p>Create</p>
                    <Link to="/pin/create">
                        <div>Create pin</div>
                    </Link>
                    <Link to="/board/create">
                        <div>Create board</div>
                    </Link>
                  
                </div>  )}
                <p>Boards</p>
                <div>
                    {imageUrl.map((url,i) => (<Link to={`/boards/${boards[i].id}`} className='link'><img src={url} alt="" className="boardimg"/></Link>))}
                    
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