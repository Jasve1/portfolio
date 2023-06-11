import React, { useState } from 'react';
import classnames from 'classnames';

const ProjectPage = ({title, content}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [imgEnlarged, setimgEnlarged] = useState(false);

    const pageOne = () => (
        <section className="c-project-page c-project-page--left">
            <header className="c-project-page__header">
                <h3>{title}</h3>
            </header>
            <section className="c-project-page__section">
                {
                    content.collab &&
                    <article className="c-project-page__article c-project-page__article--team">
                        <h4 className="c-project-page__role-header">My Teammates:</h4>
                        <ul className="c-project-page__role-list">
                            {content.collab.map((teammate) => (
                                <li className="c-project-page__role-item">
                                    <p>{teammate}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                }
                <article className="c-project-page__article">
                    <h4 className="c-project-page__role-header">What I Worked On:</h4>
                    <ul className="c-project-page__role-list">
                        {content.roles.map((role) => (
                            <li className="c-project-page__role-item">
                                <p>{role}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
            <article className="c-project-page__article">
                <h4>Project Description:</h4>
                <p>{content.dscrp}</p>
            </article>
            {
                content.link &&
                <a href={content.link} target="_blank" rel="noreferrer" className="c-project-page__link" title="Play game">
                    <div className="c-project-page__link-img">
                        <img src={`/assets/images/fantasy_theme_play.svg`} alt="Play" />
                    </div>
                    <p className="c-project-page__msg">Download game here!</p>
                </a>
            }
        </section>
    );

    const responsiveSlideWidth = window.innerWidth > 767 ? 500 : 300;
    const fullSlideWidth = window.innerWidth > 767 ? window.innerWidth * 0.6 : window.innerWidth * 0.9;
    const slideWidth = imgEnlarged ? fullSlideWidth : responsiveSlideWidth;
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

    const renderSlideButton = (className, direction) => (
        <div className={className} onClick={() => changePage(direction)}>
            <img src={`/assets/images/arrow-${direction}.svg`} alt={`Arrow ${direction}`} />
        </div>
    );

    const pageTwo = () => (
        <section className="c-project-page c-project-page--right">
            <div className={`c-project-page__slider-wrap${imgEnlarged ? "--enlarged" : ""}`}>
                {
                    content.gallery.length > 1 &&
                    renderSlideButton(leftArrowClass, 'left')
                }
                {
                    content.gallery.length > 1 &&
                    renderSlideButton(rightArrowClass, 'right')
                }
                <ul className="c-project-page__slider" style={{"width" : `${slideWidth * content.gallery.length}px`, "margin-left" : `-${slideWidth * currentPage}px`}}>
                    {content.gallery.map((img) => (
                        <li className="c-project-page__slide-item" style={{"width" : `${slideWidth}px`}}>
                            <div className="c-project-page__slide-img" onClick={() => setimgEnlarged(!imgEnlarged)}>
                                {
                                    img.frame &&
                                    <img src={`/assets/images/${img.frame}`} alt="Frame" className="c-project-page__img-frame" />
                                }
                                <img src={`/assets/images/${img.imgSrcHR}`} className={`c-project-page__img${img.frame && imgEnlarged && "--gif"}`} alt={img.alt} />
                                <div className="c-project-page__expand-retract" >
                                    <img src={`/assets/images/${imgEnlarged ? "retract.svg" : "expand.svg"}`} className="c-project-page__expand-retract-img" alt={imgEnlarged ? "retract" : "expand"} />
                                </div>
                            </div>
                            {
                                !imgEnlarged &&
                                <p className="c-project-page__slide-descrp">{img.descrp}</p>
                            }
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
