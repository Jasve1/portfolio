import React from 'react';

const ProjectPage = ({title, content}) => {
    const pageOne = () => (
        <section className="c-project-page c-project-page--left">
            <header className="c-project-page__header">
                <h3>{title}</h3>
            </header>
            <article className="c-project-page__article">
                <h4 className="c-project-page__role-header">Roles:</h4>
                <ul className="c-project-page__role-list">
                    {content.roles.map((role) => (
                        <li className="c-project-page__role-item">
                            <p>{role}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="c-project-page__article">
                <h4>Description:</h4>
                <p>{content.dscrp}</p>
            </article>
        </section>
    );

    const pageTwo = () => (
        <section className="c-project-page c-project-page--right">
            <div className="c-project-page__slider-wrap">
                <ul className="c-project-page__slider" style={{"width" : `${300 * content.gallery.length}px`}}>
                    {content.gallery.map((img) => (
                        <li className="c-project-page__slide-item">
                            <div className="c-project-page__slide-img">
                                <img src={`/assets/images/${img.imgSrcHR}`} alt={img.alt} width="300" height={300 * 0.783} />
                            </div>
                            <p className="c-project-page__slide-descrp">{img.descrp}</p>
                        </li>
                    ))}
                </ul>
            </div>
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
