import React, { useState } from "react";
import { ConnectPageModal } from "../../context/ConnectPageModal";

import ConnectPage from "../Contact/ContactPage";

function NotificationModel() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="icons">
        <button className="circleButton" onClick={() => setShowModal(true)}>
          <i class="fa-solid fa-bell"></i>
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

export default NotificationModel;
