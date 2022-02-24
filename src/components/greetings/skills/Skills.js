import React from 'react';
import Skill from "./Skill"

function Skills({type}){

    const codeSkills = [
        {
            title: "HTML5 and CSS3",
            name: "html",
            img: "html-icon",
            descrp: "Bend the DOM to your will. With this amazing power you will be able to change the very content of the page and charm all screen sizes while keeping the specificity points in line.",
            bonus: ["Accessibility", "Semantic HTML", "ITCSS", "BEM"]
        },
        {
            title: "JavaScript",
            name: "css",
            img: "js-icon",
            descrp: "",
            bonus: ["DRY", "ES6"]
        },
        {
            title: "ReactJs",
            name: "scss",
            img: "react-icon",
            descrp: "",
            bonus: ["Hooks"]
        },
        {
            title: "C#",
            name: "js",
            img: "c-icon",
            descrp: "",
            bonus: []
        },
        {
            title: "Unity",
            name: "react",
            img: "unity-icon",
            descrp: "",
            bonus: []
        },
        {
            title: "Processing",
            name: "vue",
            img: "p-icon",
            descrp: "",
            bonus: []
        }
    ];

    const designSkills = [
        {
            title: "Adobe Photoshop",
            name: "photoshop",
            img: "photoshop-icon",
            descrp: "Bend reality.",
            bonus: [""]
        },
        {
            title: "Adobe Illustrator",
            name: "illustrator",
            img: "illustrator-icon",
            descrp: "Create something from nothing.",
            bonus: [""]
        },
        {
            title: "Adobe InDesign",
            name: "indesign",
            img: "indesign-icon",
            descrp: "Alter legendary documents.",
            bonus: [""]
        },
        {
            title: "Adobe After Effects",
            name: "after-effects",
            img: "after-effects-icon",
            descrp: "Control your own world.",
            bonus: [""]
        },
        {
            title: "Blender",
            name: "blender",
            img: "blender-icon",
            descrp: "Master the 3D space.",
            bonus: [""]
        }
    ];

    return (
        <section className={`c-skills c-skills--${type}`}>
            <header className={`c-skills__header c-skills__header--${type}`}>
                <h3>{type === "code" ? "Code" : "Design"}</h3>
            </header>
            <ul className="c-skills__list">
                {
                    type === "code" ?
                    codeSkills.map(skill => (
                        <li className={`c-skills__item c-skills__item--${skill.name}`} key={skill.title}>
                            <Skill skill={skill}/>
                        </li>
                    )) :
                    designSkills.map(skill => (
                        <li className={`c-skills__item c-skills__item--${skill.name}`} key={skill.title}>
                            <Skill skill={skill}/>
                        </li>
                    ))
                }
            </ul> 
        </section>
        
    );
};

export default Skills;
