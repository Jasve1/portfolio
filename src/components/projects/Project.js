import React from "react";
import classnames from 'classnames';
import ToggleModal from '../modal/ToggleModal';

const Project = ({
    project,
    checkAchieved,
    setProjectsViewed,
    projectsViewed
}) => {
    const callBack = (open, id) => {
        if (open){
            checkAchieved('first-project');
            if(projectsViewed.indexOf(id) === -1){
                setProjectsViewed([...projectsViewed, id]);
            }
        }
    };

    const projectViewed = () => {
        return projectsViewed.some(viewed => viewed === project.id);
    };

    const projectButtonClass = classnames(`c-project__button c-project__button--${project.id}`, {
        'c-project__button--viewed': projectViewed()
    });

    const renderProjectModal = () => (
        <article className={`c-project__content c-project__content--${project.id} o-modal__content`}>
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
            </section>
            <section className="c-project__page">
                <article className="c-project__article">
                    <h4>Description:</h4>
                    <p>{project.dscrp}</p>
                </article>
            </section>
        </article>
    );

    return (
        <li className="c-project">
            <ToggleModal
                callBack={callBack}
                id={project.id}
                title={project.title}
                subTitle="By Jakob Kilias Svenningsen"
                classBundle={projectButtonClass}
                customeClass="c-project-button"
            >
                { renderProjectModal() }
            </ToggleModal>
        </li>
    );
};

export default Project;
