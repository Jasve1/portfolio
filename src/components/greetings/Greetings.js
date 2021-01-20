import React, { useState } from 'react';
import classnames from 'classnames';
import SkillsContainer from "./skills/SkillsContainer";
import InventoryContainer from "./inventory/InventoryContainer";

const Greetings = () => {
    const [isLoading, setIsLoading] = useState(true);

    const profilePicClass = classnames('c-greetings__profile-pic', {
        'loading': isLoading,
        'done-loading': !isLoading
    });

    return (
        <section className="c-greetings">

            <header className="c-greetings__header">
                <h1 className="c-greetings__header-name">Jakob Kilias Svenningsen</h1>
                <h2 className="c-greetings__header-title">Web Developer</h2>
            </header>

            <section className={profilePicClass} onLoad={() => setIsLoading(false)}>
                <img src="/assets/images/profile_pic.png" alt="me"/>
            </section>

            <section className="c-greetings__content">
                <section className="c-greetings__content-item">
                    <SkillsContainer />
                </section>
                <section className="c-greetings__content-item">
                    <InventoryContainer />
                </section>
            </section>

        </section>
    );
};

export default Greetings;
