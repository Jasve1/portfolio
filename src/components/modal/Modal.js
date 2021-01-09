import React from 'react';

const Modal = ({
    handleClick,
    id,
    children,
    modalClass
}) => (
    <section className={modalClass}>
        <div className="o-modal__exit" onClick={handleClick(false)} id={id}></div>
        {children}
    </section>
);

export default Modal;
