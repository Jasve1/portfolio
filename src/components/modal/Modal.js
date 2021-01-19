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
        <div className="o-modal__exit-button" onClick={handleClick(false)} id={id}>
            <img src={`/assets/images/fantasy_theme_exit.svg`} alt="Exit"/>
        </div>
    </section>
);

export default Modal;
