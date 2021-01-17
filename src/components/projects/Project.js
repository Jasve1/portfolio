import React, { useState } from "react";
import classnames from 'classnames';
import ToggleModal from '../modal/ToggleModal';
import ProjectPage from './ProjectPage';

const Project = ({
    project,
    checkAchieved,
    setProjectsViewed,
    projectsViewed
}) => {
    const [currentPage, setCurrentPage] = useState(1);

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

    const isEven = (num) => num % 2 === 0;

    const changePage = (direction) => {
        if (direction === 'left' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        
        if (direction === 'right' && currentPage < project.pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const projectButtonClass = classnames(`c-project__button c-project__button--${project.id}`, {
        'c-project__button--viewed': projectViewed()
    });

    const contentClass = classnames(`c-project__content c-project__content--${project.id} o-modal__content`, {
        'c-project__content--right': isEven(currentPage),
        'c-project__content--left': !isEven(currentPage)
    });

    const leftArrowClass = classnames('c-project__arrow  c-project__arrow--left', {
        'c-project__arrow--active': currentPage > 1
    });

    const rightArrowClass = classnames('c-project__arrow  c-project__arrow--right', {
        'c-project__arrow--active': currentPage < project.pages.length
    });

    const renderProjectModal = () => (
        <section className="c-project__slider">
            <article className={contentClass}>
                {
                    project.pages.map(page => (
                        <ProjectPage title={project.title} content={page} key={page.num} />
                    ))
                }
            </article>
            <section className="c-project__arrows">
                <div className={leftArrowClass} onClick={() => changePage('left')}>
                    <img src={`/assets/images/arrow-left.svg`} alt="Arrow left"/>
                </div>
                <h3>{currentPage}/{project.pages.length}</h3>
                <div className={rightArrowClass} onClick={() => changePage('right')}>
                    <img src={`/assets/images/arrow-right.svg`} alt="Arrow right"/>
                </div>
            </section>
        </section>
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
