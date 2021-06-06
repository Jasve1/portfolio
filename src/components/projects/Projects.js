import React, { useState } from "react";
import Project from "./Project";

const Projects = ({
    checkAchieved,
    allProjectsBadge
}) => {
    const [projectsViewed, setProjectsViewed ] = useState([]);

    const projects = [
        {
            id: 'project1',
            title: 'Trashpocalypse',
            pages: [
                {
                    num: 1,
                    dscrp: 'Trashpocalypse is a third-person action rpg puzzle adventure game. The player has to fight monsters made of trash in a post-apocalyptic world while trying to figure out what happened.',
                    roles: ['Game Designer', 'Game Developer', 'Illustrator'],
                },
                {
                    num: 2,
                    gallery: [
                        {
                            imgSrcHR: '',
                            imgSrcLR: '',
                            alt: '',
                            descrp: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'project2',
            title: '3D Oni Sculpture',
            pages: [
                {
                    num: 1,
                    dscrp: 'Initially creating this monster was to practice blender but as I went along I got an idea for a game. You play as this monster and everybody hates, fears you and wants you to die. Except this one cult. They want you to destroy the world because they think the world is sinful. So now you, as a player, have a choice. Join the cult, destroy the world and be the monster everyone already thinks you are or try to do good things to change people’s minds.',
                    roles: ['Character Designer', 'Sculpturere'],
                },
                {
                    num: 2,
                    gallery: [
                        {
                            imgSrcHR: 'oni.jpg',
                            imgSrcLR: '',
                            alt: '3D Oni sculpture',
                            descrp: 'Final sculpture'
                        }
                    ]
                }
            ]
        },
        {
            id: 'project3',
            title: 'Project3',
            pages: [
                {
                    num: 1,
                    dscrp: '',
                    roles: [''],
                },
                {
                    num: 2,
                    gallery: [
                        {
                            imgSrcHR: '',
                            imgSrcLR: '',
                            alt: '',
                            descrp: ''
                        }
                    ]
                }
            ]
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
                    <img src="/assets/images/icons/fantasy_theme_projects-icon.svg" alt="Shield and swords" loading="lazy" />
                </div>
            </header>
            <ul className="c-projects__list">
                {projects.map(project => (
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
