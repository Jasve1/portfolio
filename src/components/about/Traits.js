import React from 'react';

const Traits = () => {
    const traits = [
        {
            title: "Personal Traits",
            content: "I am primarily driven by curiosity."
        },
        {
            title: "Ideals",
            content: "We all have a responsibility to be the best version of ourselves."
        },
        {
            title: "Bonds",
            content: "I want to create amazing experiences with amazing people."
        },
        {
            title: "Flaws",
            content: "I simply care too much (might not be a flaw but I wasn't going to write anything that would make me look bad)."
        }
    ];

    return (
        <ul className="c-traits">
            {traits.map(trait => (
                <li key={trait.title} className="c-traits__list-item">
                    <header className="c-traits__item-header">
                        <h3>{trait.title}</h3>
                    </header>
                    <p>{trait.content}</p>
                </li>
            ))}
        </ul>
    );
};

export default Traits;
