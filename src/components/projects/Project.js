import React, { useState } from "react";
import Modal from '../Modal';

const Project = ({
    project,
    setModalOpen,
    checkAchieved,
    setProjectsViewed,
    projectsViewed
}) => {
    const [modalState, setModalState] = useState('closed');

    const handleClick = (e) => {
        e.preventDefault();
        if(modalState === 'closed'){
            setModalState('open');
            setModalOpen();
        }else{
            setModalState('closed');
            setModalOpen();
            checkAchieved('first-project');
            if(projectsViewed.indexOf(e.target.id) === -1){
                setProjectsViewed([...projectsViewed, e.target.id]);
            }
        }
    }

    const projectViewed = () => {
        return projectsViewed.some(viewed => viewed === project.id);
    }

    const renderProjectModal = () => (
        <Modal
            modalState={modalState}
            handleClick={handleClick}
            id={project.id}
        >
            <article className="c-project__content o-modal__content">
                <section className="c-project__page">
                    <header className="c-project__header">
                        <h3>{project.title}</h3>
                    </header>
                    <article className="c-project__article">
                        <h4 className="c-project__role-header">Roles:</h4>
                        <ul className="c-project__role-list">
                            {project.roles.map((role) => (
                                <li className="c-project__role-item">
                                    <p>{role}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="c-project__article">
                        <h4>Description:</h4>
                        <p>{project.dscrp}</p>
                    </article>
                </section>
                <section className="c-project__page"></section>
            </article>
        </Modal>
    );

    return (
        <li className="c-project">
            <section className={`c-project__button ${projectViewed() && "c-project__button--viewed"}`} onClick={handleClick}>
                <header className="c-project-button__header">
                    <h3>{project.title}</h3>
                    <h4>By Jakob Kilias Svenningsen</h4>
                </header>
            </section>
            {
                modalState === 'open' &&
                renderProjectModal()
            }
        </li>
    )
}

export default Project;
