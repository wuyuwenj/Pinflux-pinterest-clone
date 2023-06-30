import React, { useState } from "react";
import { ConnectPageModal } from "../../context/ConnectPageModal";
import ConnectPage from "../Contact/ContactPage";

function MessageModel() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="icons">
        <button className="messageButton" onClick={() => setShowModal(true)}>
          <i class="fa-solid fa-comment-dots"></i>
        </button>
      </div>
      {showModal && (
        <ConnectPageModal onClose={() => setShowModal(false)}>
          <ConnectPage />
        </ConnectPageModal>
      )}
    </>
  );
}
export default MessageModel;
