import React from 'react';

const Traits = () => {
    const traits = [
        {
            title: "Personal Traits",
            content: "Sometimes I hope the villan wins just so I can see what would happen."
        },
        {
            title: "Ideals",
            content: "We all have a responsibility to be the best version of ourselfs."
        },
        {
            title: "Bonds",
            content: "I want to create amazing experiences with amazing people."
        },
        {
            title: "Flaws",
            content: "I need too feel like I am doing something meaningfull to stay motivated."
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
