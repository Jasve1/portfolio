import React from "react";
import Skills from "./Skills";
import GreetingsModal from '../GreetingsModal';

const SkillsContainer = ({setModalOpen}) => (
    <section className="c-skills-container">
        <GreetingsModal
            setModalOpen={setModalOpen}
            title="Skill Tree"
            src="skill-tree"
            alt="Tree on fire"
        >
            <section className="c-skills-container__content o-modal__content">
                <Skills type="design"/>
                <Skills type="code"/> 
            </section>
        </GreetingsModal>
    </section>
);

export default SkillsContainer;