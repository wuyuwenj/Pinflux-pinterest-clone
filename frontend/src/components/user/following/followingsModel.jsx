import React, { useState } from 'react';
import {Modal} from '../../../context/Modal';
import FollowingShow from './following';
import FollowerShow from './follower';
import './follow.css';


function FollowingModal({ followType, followersArr, followeesArr }) {
    const [showModal, setShowModal] = useState(false);
    console.log(followersArr, 'followersArr')
    console.log(followeesArr, 'followeesArr')
    return (
        <>
            {console.log(showModal, 'showModal')}

            {followType === 'following' &&(<div className="followers" onClick={() => setShowModal(true)} >
                
                <span>{followersArr.length} followers</span>
            </div>)}
            {console.log(showModal, 'showModal')}

            {followType === 'follower'&& (<div className="followees" onClick={() => setShowModal(true)} > 
                <span>{followeesArr.length} following</span>
            </div>)}
            {console.log(showModal, 'showModal')}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {console.log(followType, 'followType')}
                    {followType === 'follower' && <FollowingShow followeesArr={followeesArr}/>}
                    {followType === 'following' && <FollowerShow followersArr={followersArr} followeesArr={followeesArr} />}

                </Modal>
            )}
        </>
    );
}

export default FollowingModal;