import React, { useState } from 'react';
import classnames from 'classnames';
import Process from './Process';

const Greetings = () => {
    const [isLoading, setIsLoading] = useState(true);

    const lowResClass = classnames('c-greetings__profile-pic--low-res', {
        'loading': isLoading,
        'done-loading': !isLoading
    });

    return (
        <section className="c-greetings">

            <header className="c-greetings__header">
                <section className="c-greetings__profile-pic">
                    <img src="/assets/images/profile_pic_low-res.png" width="300" height="333.66" alt="low resolution me" className={lowResClass} />
                    <img src="/assets/images/profile_pic.png" width="300" height="333.66" alt="me" onLoad={() => setIsLoading(false)} />
                </section>
                <section className="c-greetings__header-text-box">
                    <h1 className="c-greetings__header-text">Hello there!</h1>
                    <h1 className="c-greetings__header-text">My name is <mark>Jakob</mark>.</h1>
                    <h1 className="c-greetings__header-text">Utilizing the awesome powers of <mark>tech</mark> and <mark>design</mark> I realize my passion of designing <mark>curiosity driven gameplay</mark>.</h1>
                </section>
            </header>

            <Process />

        </section>
    );
};

export default Greetings;
