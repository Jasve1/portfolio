import React, { useState } from "react";
import Project from "./Project";

const Projects = ({
    setModalOpen,
    checkAchieved,
    allProjectsBadge
}) => {
    const [projectsViewed, setProjectsViewed ] = useState([]);

    const projects = [
        {
            id: "project1",
            title: "Trashpocalypse",
            img: "",
            dscrp: "Trashpocalypse is a third-person action rpg puzzle adventure game. The player has to fight monsters made of trash in a post-apocalyptic world while trying to figure out what happened.",
            roles: ["Game Designer", "Game Developer", "Illustrator"]
        },
        {
            id: "project2",
            title: "3D Oni Sculpture",
            img: "",
            dscrp: "",
            roles: ["Character Designer", "Sculpturere"]
        },
        {
            id: "project3",
            title: "Project3",
            img: "",
            dscrp: "",
            roles: [""]
        }
    ];

    if(projectsViewed.length === projects.length){
        if(!allProjectsBadge){
            checkAchieved('all-projects');
        }
    }

    return (
        <section className="c-projects">
            <header className="c-projects__header">
                <div className="c-projects__header-img">
                    <img src="/assets/images/icons/fantasy_theme_projects-icon.svg" alt="Shield and swords"/>
                </div>
            </header>
            <ul className="c-projects__list">
                {projects.map(project => (
                    <Project 
                        project={project} 
                        setModalOpen={setModalOpen} 
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
