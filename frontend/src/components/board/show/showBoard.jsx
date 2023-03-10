import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPin, getPins, fetchPins } from "../../../store/pins";
import { fetchUsers, getUsers } from "../../../store/user";
import { Link } from "react-router-dom";
import { Modal } from '../../../context/Modal';
import BoardEditForm from "../edit/boardEditForm";
import { fetchBoard } from "../../../store/boards";
import { getBoards, getBoard } from "../../../store/boards";
import { addPinBoardMapping } from "../../../store/pinboard";
import "./showBoard.css"
export default function ShowBoard() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [selectedboard, setSelectedboard] = useState("")
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        dispatch(fetchPins());
        dispatch(fetchBoard(id));
        
    }, [dispatch, id])


    const boards = useSelector(getBoards) || [];
    const pins = useSelector(getPins);
    const board = useSelector(getBoard(id))
    
  
    
    let imageUrl = [];
    let boardPins=null;
    


    if (pins&&boards && boards.length > 0) {
       
        boardPins = boards.flatMap((board) => {
            if (board.id === Number(id)) {
                return board.pins.map((pinId) => pins.find((pin) => pin.id === pinId));
            }
            return [];
        });
       


    }


    // let user=null;
    // if(pin.author){
    //    user = useSelector(getUsers(author_id))
    // }
  
    if (boards === undefined) {
        return null;
    }
    if (pins === undefined) {
        return null;
    }

 

   
    return (
        <div className='showboardpagebg'>
            <div><h1 className = "boardname">{board&&board.name}</h1>
                <button className='showboardloginbt' onClick={() => setShowModal(true)}>Edit</button>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <BoardEditForm board={board} />
                    </Modal>
                )}
                <br />
                <p>{board && board.body}</p>
            <br />
            {boardPins && boardPins.map(pin => <Link to={`/pins/${pin.id}`} className='link'><img className='images' src={pin.imageUrl} alt={pin.title} /></Link>)}</div>
           
            

   

        </div>
    )


}