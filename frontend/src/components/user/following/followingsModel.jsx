import React, { useState } from 'react';
import {Modal} from '../../../context/Modal';
import FollowingShow from './following';
import FollowerShow from './follower';
import './follow.css';


function FollowingModal({ followType, followersArr, followeesArr }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>

            {followType === 'following' &&(<div className="followers" onClick={() => setShowModal(true)} >
                
                <span>{followersArr.length} followers</span>
            </div>)}

            {followType === 'follower'&& (<div className="followees" onClick={() => setShowModal(true)} > 
                <span>{followeesArr.length} following</span>
            </div>)}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {followType === 'follower' && <FollowingShow followeesArr={followeesArr} setShowModal={setShowModal}/>}
                    {followType === 'following' && <FollowerShow followersArr={followersArr} followeesArr={followeesArr} setShowModal={setShowModal} />}

                </Modal>
            )}
        </>
    );
}

export default FollowingModal;