import React from 'react'
// import EditBoardButton from '../buttons/edit_board_button'
import './board_cover.css'
import greybg from '../../../images/greybj.png'
const BoardCover = ({ openModal, board, isUser, user, pins }) => {

    // const handleEditClick = (e) => {
    //     e.preventDefault()
    //     openModal("edit board",
    //         {
    //             boardName: board.name,
    //             path: `/users/${user.username}`
    //         })
    // }
    console.log(pins, "pins")
    return (
        <div className="boardPictureContainer">
            {/* <div>test</div> */}
            <div className="boardCoverPictures">
                <div className='leftPic' style={{ backgroundImage: `url(\"${pins[0]?.imageUrl ?? ""}\")`}} />
                <div className='rightCol'>
                    <div className='rightpic1' style={{ backgroundImage: `url(\"${pins[1]?.imageUrl ?? ""}\")` }} />
                    <div className='rightpic2' style={{ backgroundImage: `url(\"${pins[2]?.imageUrl ?? ""}\")` }} />
                </div>
            </div>
            <div className='boardCoverName'>{board.name}</div>
            
        </div>
    )
}

export default BoardCover