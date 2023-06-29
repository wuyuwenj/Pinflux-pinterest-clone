import React from 'react'
import './board_cover.css'
const BoardCover = ({ openModal, board, isUser, user, pins }) => {

    return (
        <div className="boardPictureContainer">
            <div className="boardCoverPictures">
                <div className='leftPic' style={{
                    backgroundImage: `url("${pins[0]?.imageUrl ?? ""}")`, backgroundSize: '100% 100%'}} />
                <div className='rightCol'>
                    <div className='rightpic1' style={{ backgroundImage: `url("${pins[1]?.imageUrl ?? ""}")`, backgroundSize: '100% 100%' }} />
                    <div className='rightpic2' style={{ backgroundImage: `url("${pins[2]?.imageUrl ?? ""}")`, backgroundSize: '100% 100%' }} />
                </div>
            </div>
            <div className='boardCoverName'>{board.name}</div>
            
        </div>
    )
}

export default BoardCover