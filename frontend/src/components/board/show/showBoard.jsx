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
    console.log(id,'idshowpin')
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [selectedboard, setSelectedboard] = useState("")
    const [showModal, setShowModal] = useState(false);

    // const state=localStorage.getItem('pins');
    // console.log(state,'state')

    useEffect(() => {
        dispatch(fetchPins());
        dispatch(fetchBoard(id));
        
    }, [dispatch, id])


    const boards = useSelector(getBoards) || [];
    const pins = useSelector(getPins);
    const board = useSelector(getBoard(id))
    console.log(board)
    if(board){
        console.log(board.name)
    }
    
    let imageUrl = [];
    let boardPins=null;
    


    if (pins&&boards && boards.length > 0) {
        // if (pins && boards && boards.length > 0) {
        //     const board = boards.find(board => board.id === id);
        //     console.log(board,"board")
        //     if (board) {
        //         boardPins = pins.filter(pin => board.pins.includes(pin.id));
        //         console.log(boardPins, "boardPins");
        //         imageUrl = boardPins.map(pin => pin.imageUrl);
        //         console.log(imageUrl, "imageUrl");
        //     }
        // }
        boardPins = boards.flatMap((board) => {
            if (board.id === Number(id)) {
                return board.pins.map((pinId) => pins.find((pin) => pin.id === pinId));
            }
            return [];
        });
        // console.log(boardPins, "bodpins")
        //  boardspins = boards.map((board) => {
        //     board.pins.forEach((pinId)=>{
        //         return pins.find((pin) => pin.id === pinId);
        //     })
             
        // });
        // console.log(boardPins)
        // boardspins.map((pin, i) => {
        //     if (boardspins[i]) {
        //         imageUrl[i] = pin.imageUrl;
        //     }
        // })
        // console.log(boardspins)


    }


    // let user=null;
    // if(pin.author){
    //    user = useSelector(getUsers(author_id))
    // }
    // console.log(pin, "pin")
    // console.log(user, "user")
    if (boards === undefined) {
        return null;
    }
    if (pins === undefined) {
        return null;
    }

 

    // console.log(pin,"SHOWPIN")
    // console.log(author,"author")
    // console.log(pin[id],'pin!')
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