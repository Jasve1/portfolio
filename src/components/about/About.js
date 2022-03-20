import React from 'react';
import Description from "./Description";
import Traits from "./Traits";
import Abilities from "./Abilities";

const About = () => (
    <section className="c-about">
        <header className="c-about__header">
            <div className="c-about__header-img">
                <img src="/assets/images/icons/fantasy_theme_about-icon.svg" alt="Knight" />
            </div>
        </header>
        <section className="c-about__content">
            <Description/>  
            <section className="c-about__middle-content">
                <Traits/>
                <Abilities/>
            </section>
        </section>
    </section>
);

export default About;
