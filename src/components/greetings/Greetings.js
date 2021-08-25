import React, { useState } from 'react';
import classnames from 'classnames';
import SkillsContainer from "./skills/SkillsContainer";
import InventoryContainer from "./inventory/InventoryContainer";

const Greetings = () => {
    const [isLoading, setIsLoading] = useState(true);

    const lowResClass = classnames('c-greetings__profile-pic--low-res', {
        'loading': isLoading,
        'done-loading': !isLoading
    });

    return (
        <section className="c-greetings">

            <header className="c-greetings__header">
                <h1 className="c-greetings__header-name">Jakob Kilias Svenningsen</h1>
                <h2 className="c-greetings__header-title">Game Design Student</h2>
            </header>

            <section className="c-greetings__profile-pic">
                <img src="/assets/images/profile_pic_low-res.png" width="300" height="333.66" alt="low resolution me" className={lowResClass} />
                <img src="/assets/images/profile_pic.png" width="300" height="333.66" alt="me" onLoad={() => setIsLoading(false)} />
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
