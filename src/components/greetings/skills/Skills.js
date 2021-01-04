import React from 'react';
import Skill from "./Skill"

function Skills({type}){

    const codeSkills = [
        {
            title: "HTML5",
            name: "html",
            img: "html-icon",
            descrp: "This ring will, through the power of HTML, bend the DOM to your will",
            bonus: ["Accessibility", "Semantic HTML"]
        },
        {
            title: "CSS3",
            name: "css",
            img: "css-icon",
            descrp: "Big, medium or small this talisman will charm all screen sizes while keeping the specificity points in line",
            bonus: ["ITCSS", "BEM"]
        },
        {
            title: "SCSS",
            name: "scss",
            img: "scss-icon",
            descrp: "Big, medium or small this talisman will charm all screen sizes while keeping the specificity points in line",
            bonus: ["ITCSS", "BEM"]
        },
        {
            title: "JavaScript",
            name: "js",
            img: "js-icon",
            descrp: "",
            bonus: ["DRY", "ES6"]
        },
        {
            title: "ReactJs",
            name: "react",
            img: "react-icon",
            descrp: "",
            bonus: ["Hooks"]
        },
        {
            title: "VueJs",
            name: "vue",
            img: "vue-icon",
            descrp: "",
            bonus: ["Hooks"]
        }
    ];

    const designSkills = [
        {
            title: "Adobe Photoshop",
            name: "photoshop",
            img: "photoshop-icon",
            descrp: "",
            bonus: [""]
        },
        {
            title: "Adobe Illustrator",
            name: "illustrator",
            img: "illustrator-icon",
            descrp: "",
            bonus: [""]
        },
        {
            title: "Adobe InDesign",
            name: "indesign",
            img: "indesign-icon",
            descrp: "",
            bonus: [""]
        },
        {
            title: "Adobe After Effects",
            name: "after-effects",
            img: "after-effects-icon",
            descrp: "",
            bonus: [""]
        },
        {
            title: "Blender",
            name: "blender",
            img: "blender-icon",
            descrp: "",
            bonus: [""]
        }
    ];

    return (
        <section className="c-skills">
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
