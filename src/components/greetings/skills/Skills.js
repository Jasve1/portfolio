import React from 'react';
import Skill from "./Skill"

function Skills({type}){

    const codeSkills = [
        {
            title: "HTML5 and CSS3",
            name: "html",
            img: "html-icon",
            descrp: "Bend the DOM to your will. With this amazing power you will be able to change the very content of the page and charm all screen sizes while keeping the specificity points in line.",
            bonus: ["+2 CHA"]
        },
        {
            title: "JavaScript",
            name: "css",
            img: "js-icon",
            descrp: "Gain the power of complete freedom where only your imagination sets the limit.",
            bonus: ["+1 DEX", "+2 WIS"]
        },
        {
            title: "ReactJs",
            name: "scss",
            img: "react-icon",
            descrp: "Master the power of components each with their own state to unlock the unlimited potential of the virtual DOM.",
            bonus: ["+1 INT", "+2 WIS"]
        },
        {
            title: "C#",
            name: "js",
            img: "c-icon",
            descrp: "Explore the power of concepts from the physical world in the digital world.",
            bonus: ["+3 INT"]
        },
        {
            title: "Unity",
            name: "react",
            img: "unity-icon",
            descrp: "Create imaginary worlds using your mind.",
            bonus: ["+2 INT", "+2 CHA"]
        },
        {
            title: "Processing",
            name: "vue",
            img: "p-icon",
            descrp: "Become the artist you always knew you were.",
            bonus: ["+3 CHA"]
        }
    ];

    const designSkills = [
        {
            title: "Adobe Photoshop",
            name: "photoshop",
            img: "photoshop-icon",
            descrp: "Bend reality.",
            bonus: ["+2 CHA", "+1 STR"]
        },
        {
            title: "Adobe Illustrator",
            name: "illustrator",
            img: "illustrator-icon",
            descrp: "Create something from nothing.",
            bonus: ["+1 CHA", "+2 DEX"]
        },
        {
            title: "Adobe InDesign",
            name: "indesign",
            img: "indesign-icon",
            descrp: "Alter legendary documents.",
            bonus: ["+2 STR", "+1 CHA"]
        },
        {
            title: "Adobe After Effects",
            name: "after-effects",
            img: "after-effects-icon",
            descrp: "Control your own world.",
            bonus: ["+3 STR", "+1 DEX"]
        },
        {
            title: "Blender",
            name: "blender",
            img: "blender-icon",
            descrp: "Master the 3D space.",
            bonus: ["+4 STR", "+1 INT"]
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
