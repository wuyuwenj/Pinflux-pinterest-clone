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
export default function ShowPin(){
    const {id} = useParams();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [selectedboard, setSelectedboard] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [boxHeight, setBoxHeight] = useState(null)
    // const state=localStorage.getItem('pins');

    useEffect(()=>{
        dispatch(fetchPin(id));
        dispatch(fetchBoards());
        dispatch(fetchUsers());
    },[dispatch,id])
     
    const boards = useSelector(getBoards)
    const pin = useSelector(getPin(id))
    let authorId;
    if(pin&&pin.authorId){
        authorId=pin.authorId;
        const imge = new Image();
        imge.src = pin.imageUrl;
        imge.onload = () => {
            // const imgheight = img.height;
            setBoxHeight(imge.height * (440 / imge.width ));

        };
        
    }

    // useEffect(()=>{
    //     console.log(boxHeight,"boxHeight")
    // },[boxHeight])
    const pinowner = useSelector(getUser(authorId))
    // console.log(pinowner,"pinowner")

    // let user=null;
    // if(pin.author){
    //    user = useSelector(getUsers(author_id))
    // }

    if (pin === undefined || pin.imageUrl === undefined) {
        return null;
    }
    if (boards === undefined) {
        return null;
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        const board = boards.find(board => board.name === selectedboard)

        const pinId = pin.id
        const boardId = board.id
        // const mappingData = {
        //     pin_id: pinId,
        //     board_id: boardId
        // }

        dispatch(addPinBoardMapping(pinId, boardId))
        setTimeout(setRedirect(true), 5000)

    }
    if (redirect) {
        return (
            <Redirect to="/" />
        )
    }
    


    return(
        (pinowner &&<div className='pinshowpagebg'>
            <form className="showformbox" onSubmit={handleSubmit} style={{ height: boxHeight ? `${boxHeight}px` : 'auto' }}>
                {console.log(boxHeight,"boxHeight")}
                <table className="table1" style={{ height: boxHeight ? `${boxHeight-140}px !important` : 'auto' }}>
                    <tbody>
                        <tr>
                            <td> <img src={pin.imageUrl} alt="" className="showimg" style={{ height: boxHeight ? `${boxHeight}px` : 'auto' }} /></td>
                            <td className="pinshowright" style={{ height: boxHeight ? `${boxHeight-140}px` : 'auto' }}>      
                                <button className='Editbutton' onClick={() => setShowModal(true)}>Edit</button>
    
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <PinEditForm pin={pin} />
                                    </Modal>
                                )}
                                <label for="boards"></label>

                                <select name="boards" value={selectedboard} onChange={e=>setSelectedboard(e.target.value)} className="boarddropdown">
                                    {boards.map(board => ( <option value={board.name}>{board.name}</option> ))}
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
                                </div>
                                <br />
                                <br />
                                <br />
                                {/* <div>Uploaded by {pin.author.username}</div> */}
                                <div className="Pintitle">{pin.title}</div>
                                <div className="Pinbody">{pin.body}</div>
                                <div>{pin.alt_text}</div>
                                <br />
                               
                            </td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </form>
            
        </div>
            
            
            )
        
    )
   

}