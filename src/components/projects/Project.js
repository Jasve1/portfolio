import React, { useState } from "react";
import classnames from 'classnames';
import ToggleModal from '../modal/ToggleModal';
import ProjectPage from './ProjectPage';
import SlideArrows from "./SliderArrows";

const Project = ({
    project,
    checkAchieved,
    setProjectsViewed,
    projectsViewed
}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageFlipDirection, setPageFlipDirection] = useState('right');

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

    const showSinglePage = window.innerWidth < 1024;

    const projectButtonClass = classnames(`c-project__button c-project__button--${project.id}`, {
        'c-project__button--viewed': projectViewed()
    });

    const contentClass = classnames(`c-project__content c-project__content--${project.id} o-modal__content`, {
        'c-project__content--single': showSinglePage
    });

    const pages = showSinglePage ? project.pages.slice(currentPage, currentPage + 1) : project.pages.slice(currentPage, currentPage + 2);

    const renderProjectModal = () => (
        <section className="c-project__slider">
            <article className={contentClass}>
                {
                    pages.map((page) => (
                        <ProjectPage
                            title={project.title}
                            content={page}
                            showSinglePage={showSinglePage}
                            nrOfPagesShown={pages.length}
                            currentPage={page.num}
                            pageFlipDirection={pageFlipDirection}
                            key={page.num}
                        />
                    ))
                }
            </article>
            <SlideArrows
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                showSinglePage={showSinglePage}
                length={project.pages.length}
                setPageFlipDirection={setPageFlipDirection}
            />
        </section>
    );

    return (
        <li className="c-project">
            <ToggleModal
                callBack={callBack}
                id={project.id}
                title={project.title}
                subTitle={project.subTitle}
                classBundle={projectButtonClass}
                customeClass="c-project-button"
            >
                { renderProjectModal() }
            </ToggleModal>
        </li>
    );
};

export default Project;
