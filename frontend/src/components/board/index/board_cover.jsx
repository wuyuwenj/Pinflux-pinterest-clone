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
    return (
        <div className="boardPictureContainer">
            {/* <div>test</div> */}
            <div className="boardCoverPictures">
                <div className='leftPic' style={{
                    backgroundImage: `url(\"${pins[0]?.imageUrl ?? ""}\")`, backgroundSize: '100% 100%'}} />
                <div className='rightCol'>
                    <div className='rightpic1' style={{ backgroundImage: `url(\"${pins[1]?.imageUrl ?? ""}\")`, backgroundSize: '100% 100%' }} />
                    <div className='rightpic2' style={{ backgroundImage: `url(\"${pins[2]?.imageUrl ?? ""}\")`, backgroundSize: '100% 100%' }} />
                </div>
            </div>
            <div className='boardCoverName'>{board.name}</div>
            
        </div>
    )
}

export default BoardCover