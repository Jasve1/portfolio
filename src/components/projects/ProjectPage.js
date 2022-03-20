import React, { useState } from 'react';
import classnames from 'classnames';

const ProjectPage = ({title, content}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const pageOne = () => (
        <section className="c-project-page c-project-page--left">
            <header className="c-project-page__header">
                <h3>{title}</h3>
            </header>
            <article className="c-project-page__article">
                <h4 className="c-project-page__role-header">What I worked with:</h4>
                <ul className="c-project-page__role-list">
                    {content.roles.map((role) => (
                        <li className="c-project-page__role-item">
                            <p>{role}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="c-project-page__article">
                <h4>Project Description:</h4>
                <p>{content.dscrp}</p>
            </article>
        </section>
    );

    const slideWidth = window.innerWidth > 767 ? 500 : 300;
    const numOfSlides = content.gallery ? content.gallery.length - 1 : 0;

    const changePage = (direction) => {
        if (direction === 'left' && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        
        if (direction === 'right' && currentPage < numOfSlides) {
            setCurrentPage(currentPage + 1);
        }
    }

    const leftArrowClass = classnames('c-project-page__arrow  c-project-page__arrow--left', {
        'c-project-page__arrow--active': currentPage > 0
    });

    const rightArrowClass = classnames('c-project-page__arrow  c-project-page__arrow--right', {
        'c-project-page__arrow--active': currentPage < numOfSlides
    });

    const pageTwo = () => (
        <section className="c-project-page c-project-page--right">
            <div className="c-project-page__slider-wrap">
                <div className={leftArrowClass} onClick={() => changePage('left')}>
                    <img src={`/assets/images/arrow-left.svg`} alt="Arrow left" />
                </div>
                <div className={rightArrowClass} onClick={() => changePage('right')}>
                    <img src={`/assets/images/arrow-right.svg`} alt="Arrow right" />
                </div>
                <ul className="c-project-page__slider" style={{"width" : `${slideWidth * content.gallery.length}px`, "margin-left" : `-${slideWidth * currentPage}px`}}>
                    {content.gallery.map((img) => (
                        <li className="c-project-page__slide-item" style={{"width" : `${slideWidth}px`}}>
                            <div className="c-project-page__slide-img">
                                <img src={`/assets/images/${img.imgSrcHR}`} alt={img.alt} />
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
