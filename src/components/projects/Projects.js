import React, { useState } from "react";
import Project from "./Project";
import { PROJECTS } from './constants/projectData';

const Projects = ({
    checkAchieved,
    allProjectsBadge
}) => {
    const [projectsViewed, setProjectsViewed ] = useState([]);

    if(projectsViewed.length === PROJECTS.length){
        if(!allProjectsBadge){
            checkAchieved('all-projects');
        }
    }

    return (
        <section className="c-projects">
            <header className="c-projects__header">
                <div className="c-projects__header-img">
                    <img src="/assets/images/icons/fantasy_theme_projects-icon.svg" alt="Shield and swords" />
                </div>
            </header>
            <ul className="c-projects__list">
                {PROJECTS.map(project => (
                    <Project 
                        project={project} 
                        checkAchieved={checkAchieved} 
                        setProjectsViewed={setProjectsViewed}
                        projectsViewed={projectsViewed}
                        key={project.id}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Projects;
