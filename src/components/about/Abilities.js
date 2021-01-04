import React from 'react';

const Abilities = () => {
    const abilities = [
        {
            title: "Languages",
            content: "Danish and English"
        },
        {
            title: "Creative Tools",
            content: "Acrylic Painting, Water Color Painting, Adobe Illustrator and Programming"
        },
        {
            title: "Terrain",
            content: "Adept in metropolitan area and office (gives you douple speed in this terrain)."
        }
    ];

    return (
        <article className="c-abilities">
            <header className="c-abilities__header">
                <h3>Proficiencies</h3>
            </header>
            <ul className="c-abilities__list">
            {abilities.map(ability => (
                <li className="c-abilities__list-item">
                   <p><b>{ability.title}:</b> {ability.content}</p> 
                </li>
            ))}
            </ul>
        </article>
    );
};

export default Abilities;
