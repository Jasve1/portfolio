import React from 'react';

const Description = () => {
    const dscrpList = [
        {
            title: "Race",
            content: "Human"
        },
        {
            title: "Class",
            content: "Web Developer"
        },
        {
            title: "Background",
            content: "Multimedia Designer"
        },
        {
            title: "Alignment",
            content: "Neutral"
        }
    ];

    return (
        <article className="c-description">
            <header className="c-description__header">
                <h2>Jakob Kilias Svenningsen</h2>
            </header>
            <ul className="c-description__list">
                {dscrpList.map(item => (
                    <li key={item.title} className="c-description__list-item">
                        <header className="c-description__item-header">
                            <h4>{item.title}</h4>
                        </header>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Description;
