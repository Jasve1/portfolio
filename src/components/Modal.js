import React from 'react';

const Modal = ({
    modalState,
    handleClick,
    id,
    children
}) => (
    <section className={`o-modal o-modal--${modalState}`}>
        <div className="o-modal__exit" onClick={handleClick} id={id}></div>
        {children}
    </section>
);

export default Modal;
