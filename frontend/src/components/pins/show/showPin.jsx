import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPin, getPin,fetchPins } from "../../../store/pins";
import { fetchUsers, getUsers } from "../../../store/user";
import { Link } from "react-router-dom";
import { Modal } from '../../../context/Modal';

import "./show.css"
import { fetchBoards } from "../../../store/boards";
import { getBoards } from "../../../store/boards";
import { addPinBoardMapping } from "../../../store/pinboard";
import PinEditForm from "../edit/pinsedit";
export default function ShowPin(){
    const {id} = useParams();
    const [showModal, setShowModal] = useState(false);

    // console.log(id,'idshowpin')
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [selectedboard, setSelectedboard] = useState("")
    // const state=localStorage.getItem('pins');
    // console.log(state,'state')
   
    useEffect(()=>{
        dispatch(fetchPin(id));
        dispatch(fetchBoards())
    },[dispatch,id])
     
    const boards = useSelector(getBoards)
    const pin = useSelector(getPin(id))
    console.log(boards,"boards")
    // let user=null;
    // if(pin.author){
    //    user = useSelector(getUsers(author_id))
    // }
    // console.log(pin, "pin")
    // console.log(user, "user")
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
    }
    

    // console.log(pin,"SHOWPIN")
    // console.log(author,"author")
    // console.log(pin[id],'pin!')
    return(
        <div className='pinshowpagebg'>
            <form className="showformbox" onSubmit={handleSubmit}>
                <table className="table1">
                    <tbody>
                        <tr>
                            <td> <img src={pin.imageUrl} alt="" className="showimg"/></td>
                            <td className="pinshowright">      
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
                                <br />
                                
                                <br />
                                <br />
                                <br />
                                <br />
       <div className="showuserButton-container">
                                    <Link to={`/user/${sessionUser.id}`} className="showuserButton">
                                        <span className="showUsername">{sessionUser.username[0]}</span>
                                        <span className="showfullUsername">{sessionUser.username}</span>
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
                                <br />
                                <br /><br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br /><br />
                                <br />
                                <br />
                                <br />
                                <br />
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
   

}