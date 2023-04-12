import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPin, getPin,fetchPins } from "../../../store/pins";
import { fetchUsers, getUser, getUsers } from "../../../store/user";
import { Link } from "react-router-dom";
import { Modal } from '../../../context/Modal';
import { Redirect } from "react-router-dom";
import "./show.css"
import { fetchBoards } from "../../../store/boards";
import { getBoards } from "../../../store/boards";
import { addPinBoardMapping } from "../../../store/pinboard";
import PinEditForm from "../edit/pinsedit";
import Loading from "../../LoadingPage/Loading";
import FollowButton from "../../user/following/followbutton";
export default function ShowPin(){
    const {id} = useParams();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [selectedboard, setSelectedboard] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [boxHeight, setBoxHeight] = useState(null)
    const [loaded, setLoaded] = useState(false);
    const [isPinOwnerLoaded, setIsPinOwnerLoaded] = useState(false);
    // const state=localStorage.getItem('pins');
    const boards = useSelector(getBoards)
    const pin = useSelector(getPin(id))
    let authorId=null;
    if (pin && authorId ===null&&pin.authorId) authorId = pin.authorId;
    if (pin && authorId === null && pin.author) authorId = pin.author;

    // console.log(pin,"pin")
    // console.log(authorId,"authoId")
    const pinowner = useSelector(getUser(authorId));

    useEffect(()=>{
        setLoaded(false);
        Promise.all([
        dispatch(fetchPin(id)),
        dispatch(fetchBoards(sessionUser.id)),
        dispatch(fetchUsers())
        ]).then(() => {
            setLoaded(true);
        })
    },[dispatch,id])    
    // const boards = useSelector(getBoards)
    // const pin = useSelector(getPin(id))

    function settingbox(){
        if(pin){
           const img = new Image();
        img.src = pin.imageUrl;
        img.onload = function () {
            setBoxHeight(img.height * (440/img.width));
        }; 
        }
        

    }
    useEffect(() => {
        settingbox();
    }, [pin])
    useEffect(() => {
        if(!selectedboard&&boards[0]){
            setSelectedboard(boards[0].name)
        }
    }, [boards])
 
    
    
   

        // console.log(pinowner, "owner")

    // if (!loaded || !isPinOwnerLoaded) {
    //     return null;
    // }


   
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let board;

        const pinId = pin.id
        // const boardId = board.id
        // const mappingData = {
        //     pin_id: pinId,
        //     board_id: boardId
        // }
        board = await boards.find(board => board.name === selectedboard)
        // const boardId=await board.id;
        dispatch(addPinBoardMapping(pinId, board.id))
        setTimeout(setRedirect(true), 5000)

    }

    if (redirect) {
        return (
            <Redirect to="/" />
        )
    }
    
    if (pin === undefined || pin.imageUrl === undefined) {
        return null;
    }
    if (boards === undefined) {
        return null;
    }
    if (loaded===false||pinowner === undefined) {
        return <Loading />
    }

    // return(
    //     (pinowner &&<div className='pinshowpagebg'>
    //         <form className="showformbox" onSubmit={handleSubmit} style={{ height: boxHeight ? `${boxHeight}px` : 'auto' }}>
    //             <table className="table1" style={{ height: boxHeight ? `${boxHeight-140}px !important` : 'auto' }}>
    //                 <tbody>
    //                     <tr>
    //                         <td> <img src={pin.imageUrl} alt="" className="showimg" /></td>
    //                         <td className="pinshowright" style={{ height: boxHeight ? `${boxHeight-140}px` : 'auto' }}>      
    //                             <button type='button' className='Editbutton' onClick={() => setShowModal(true)}>Edit</button>
    
    //                             {showModal && (
    //                                 <Modal onClose={() => setShowModal(false)}>
    //                                     <PinEditForm pin={pin} />
    //                                 </Modal>
    //                             )}
    //                             <label for="boards"></label>

    //                             <select name="boards" value={selectedboard} onChange={e=>setSelectedboard(e.target.value)} className="boarddropdown">
    //                                 {boards.map(board => ( <option value={board.name}>{board.name}</option> ))}
    //                             </select>
    //                             <input className="saveButton" type="submit" value="Save" />
    //                             <br />
    //                             <br />
                               
    //                             <br />
    //                             <div className="showuserButton-container">
    //                                 <Link to={`/user/${pinowner.id}`} className="showuserButton">
    //                                     <span className="showUsername">{pinowner.username[0]}</span>
    //                                     <span className="showfullUsername">{pinowner.username}</span>
    //                                 </Link>
    //                                 {/* <FollowButton followeeId={pinowner.id} followerId={sessionUser.id}  /> */}
    //                             </div>
    //                             <br />
    //                             <br />
    //                             <br />
    //                             {/* <div>Uploaded by {pin.author.username}</div> */}
    //                             <div className="Pintitle">{pin.title}</div>
    //                             <div className="Pinbody">{pin.body}</div>
    //                             <div>{pin.alt_text}</div>
    //                             <br />
                               
    //                         </td>
    //                     </tr>
    //                     <tr>

    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </form>
            
    //     </div>
            
            
    //         )
        
    // )
    return (
        pinowner && (
            <div className="pinshowpagebg">
                <form
                    className="showformbox"
                    onSubmit={handleSubmit}
                    style={{ height: boxHeight ? `${boxHeight}px` : 'auto' }}
                >
                    <div className="left-container">
                        <img src={pin.imageUrl} alt="" className="showimg" />
                    </div>
                    <div className="right-container">
                        <button
                            type="button"
                            className="Editbutton"
                            onClick={() => setShowModal(true)}
                        >
                            Edit
                        </button>

                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <PinEditForm pin={pin} setShowModal={setShowModal}/>
                            </Modal>
                        )}
                        <label htmlFor="boards" />
                        <select
                            name="boards"
                            value={selectedboard}
                            onChange={(e) => setSelectedboard(e.target.value)}
                            className="boarddropdown"
                        >
                            {boards.map((board) => (
                                <option key={board.id} value={board.name}>
                                    {board.name}
                                </option>
                            ))}
                        </select>
                        <input className="saveButton" type="submit" value="Save" />
                        <br />
                        <br />
                        <br />
                        <div className="showuserButton-container">
                            <Link to={`/user/${pinowner.id}`} className="showuserButton">
                                <span className="showUsername">{pinowner.username[0]}</span>
                                <span className="showfullUsername">{pinowner.username}</span>
                            </Link>
                            {/* <FollowButton followeeId={pinowner.id} followerId={sessionUser.id}  /> */}
                        </div>
                        <br />
                        <br />
                        <br />
                        {/* <div>Uploaded by {pin.author.username}</div> */}
                        <div className="Pintitle">{pin.title}</div>
                        <div className="Pinbody">{pin.body}</div>
                        <div>{pin.alt_text}</div>
                        <br />
                    </div>
                </form>
            </div>
        )
    );

   

}