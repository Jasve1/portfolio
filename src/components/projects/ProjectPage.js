import React from 'react';

const ProjectPage = ({title, content}) => {
    const pageOne = () => (
        <section className="c-project__page c-project__page--left">
            <header className="c-project__header">
                <h3>{title}</h3>
            </header>
            <article className="c-project__article">
                <h4 className="c-project__role-header">Roles:</h4>
                <ul className="c-project__role-list">
                    {content.roles.map((role) => (
                        <li className="c-project__role-item">
                            <p>{role}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="c-project__article">
                <h4>Description:</h4>
                <p>{content.dscrp}</p>
            </article>
        </section>
    );

    const pageTwo = () => (
        <section className="c-project__page c-project__page--right">
            <p>Page 2</p>
        </section>
    );

    switch (content.num) {
        case 1:
            return pageOne()
        case 2:
            return pageTwo()
        default:
            return <p>No content available</p>
    }
};

export default ProjectPage;
