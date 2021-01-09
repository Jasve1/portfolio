import React, { useState, Fragment } from 'react';
import useStopScroll from '../hooks/useStopScroll';
import classnames from 'classnames';
import Modal from './Modal';

const ToggleModal = ({
    children,
    img,
    alt,
    classBundle,
    customeClass,
    title,
    subTitle,
    id,
    callBack
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openAnimation, setOpenAnimation] = useState(isOpen);
    const { changeScroll } = useStopScroll();

    const openModal = (open) => {
        const delay = isOpen ? 300 : 0;
        return new Promise((resolve) => {
            setTimeout(() => {
                setIsOpen(open);
                resolve('resolve');
            }, delay);
        });
    };

    const init = open => (e) => {
        openModal(open);
        setOpenAnimation(open);
        changeScroll(open);
        if (callBack) {
            callBack(open, e.target.id);
        }
    };

    const modalClass = classnames('o-modal', {
        'o-modal--open': openAnimation,
        'o-modal--close': !openAnimation
    });

    return (
        <Fragment>
            <section className={classBundle} onClick={init(true)} id={id}>
                {
                    img &&
                    <div className={`${customeClass}__img`}>
                        <img src={`/assets/images/fantasy_theme_${img}.svg`} alt={alt}/>
                    </div>
                }
                <header className={`${customeClass}__header`}>
                    { title && <h3>{title}</h3>}
                    { subTitle && <h4>{subTitle}</h4> }
                </header>
            </section>
            {
                isOpen &&
                <Modal modalClass={modalClass} handleClick={init} id={id}>
                    {children}
                </Modal>
            }
        </Fragment>
    );
};

export default ToggleModal;
