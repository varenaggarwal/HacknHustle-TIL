import './../css/modal.css';
import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button className="close_modal" type="button" onClick={handleClose}>
          Close
        </button> */}
        <div className="close_modal close-icon"  onClick={handleClose}>
          <span><img src="close.png"></img></span>
        </div>
      </section>
    </div>
  );
};

export default Modal;