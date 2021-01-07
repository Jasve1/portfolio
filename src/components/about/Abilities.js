import React from 'react';

const Abilities = () => {
    const abilities = [
        {
            title: 'Languages',
            content: 'Danish and English'
        },
        {
            title: 'Art',
            content: 'Adept in painting with acrylics and water color.'
        },
        {
            title: 'Terrain',
            content: 'Adept in any metropolitan area or inside an office.'
        },
        {
            title: 'Fun Facts',
            content: 'Have an almost annoying repertoire of random facts from sci-fi, fantasy and manga.'
        }
    ];

    return (
        <article className="c-abilities">
            <header className="c-abilities__header">
                <h3>Proficiencies</h3>
            </header>
            <ul className="c-abilities__list">
            {abilities.map(ability => (
                <li key={ability.title} className="c-abilities__list-item">
                   <p><b>{ability.title}:</b> {ability.content}</p> 
                </li>
            ))}
            </ul>
        </article>
    );
};

export default Abilities;
