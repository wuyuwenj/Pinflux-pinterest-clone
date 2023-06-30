import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./ConnectPageModal.css";

const ConnectPageModalContext = React.createContext();

export function ConnectPageModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ConnectPageModalContext.Provider value={value}>
        {children}
      </ConnectPageModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function ConnectPageModal({ onClose, children }) {
  const modalNode = useContext(ConnectPageModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="connect-modal">
      <div id="connect-modal-background" onClick={onClose} />
      <div id="connect-modal-content">
        <div id="cx" onClick={onClose}>
          x
        </div>
        {children}
      </div>
    </div>,
    modalNode
  );
}
