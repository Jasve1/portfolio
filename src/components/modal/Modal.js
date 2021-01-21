import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

const Modal = ({
    handleClick,
    id,
    children,
    openAnimation
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const modalClass = classnames('o-modal', {
        'o-modal--close': !openAnimation,
        'o-modal--loading': isLoading,
        'o-modal--done-loading': !isLoading
    });

    return (
        <section className={modalClass}>
            <div className="o-modal__exit" onClick={handleClick(false)} id={id}></div>
            {children}
            <div className="o-modal__exit-button" onClick={handleClick(false)} id={id}>
                <img src={`/assets/images/fantasy_theme_exit.svg`} alt="Exit"/>
            </div>
        </section>
    );
};

export default Modal;
