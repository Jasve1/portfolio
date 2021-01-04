import React, { useState, Fragment } from "react";
import GreetingsButton from "./GreetingsButton";
import Modal from '../Modal';

const GreetingsModal = ({
    setModalOpen,
    children,
    title,
    src,
    alt
}) => {
    const [modalState, setModalState] = useState("closed");

    const handleClick = (e) => {
        e.preventDefault();
        if(modalState === "closed"){
            setModalState("open");
            setModalOpen();
        }else{
            setModalState("closed");
            setModalOpen();
        }
    };

    return (
        <Fragment>
            <GreetingsButton title={title} src={src} alt={alt} handleClick={handleClick}/>
            {
                modalState === 'open' &&
                <Modal modalState={modalState} handleClick={handleClick}>
                    {children}
                </Modal>
            }
        </Fragment>
    );
};

export default GreetingsModal;
