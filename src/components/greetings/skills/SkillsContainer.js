import React from "react";
import Skills from "./Skills";
import ToggleModal from '../../modal/ToggleModal';

const SkillsContainer = () => (
    <section className="c-skills-container">
        <ToggleModal
            subTitle="Skill Tree"
            img="skill-tree"
            alt="Tree on fire"
            customeClass="c-greetings-button"
            classBundle="c-greetings-button"
        >
            <section className="c-skills-container__content o-modal__content">
                <article className="c-skills-container__description">
                    <h3>Skill Tree</h3>
                    <p>Through my work I have accuired many skills in with different tools and technologies.</p>
                    <p>These are the once that I have the most experience with.</p>
                </article>
                <Skills type="design"/>
                <Skills type="code"/> 
            </section>
        </ToggleModal>
    </section>
);

export default SkillsContainer;