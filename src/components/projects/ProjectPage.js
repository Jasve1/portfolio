import React, { useState } from 'react';
import classnames from 'classnames';
import ImageSlider from './ImageSlider';
import Article from './Article';
import List from './List';

const ProjectPage = ({content, nrOfPagesShown, currentPage, pageFlipDirection}) => {
    const [prevPage, setPrevPage] = useState(1);
    const [pageLoaded, setPageLoaded] = useState(false);

    if (prevPage !== currentPage) {
        console.log(prevPage, currentPage);
        setPrevPage(currentPage);
    }

    const isEven = currentPage % 2 === 0;
    
    const pageClass = classnames(`c-project-page`, {
        'c-project-page__left': !isEven,
        'c-project-page__right': isEven,
        'c-project-page__single-page': nrOfPagesShown === 1,
        'c-project-page__single-page--turn-right': nrOfPagesShown === 1 && pageFlipDirection === 'right',
        'c-project-page__single-page--turn-left': nrOfPagesShown === 1 && pageFlipDirection === 'left',
        'c-project-page__first-page': currentPage === 1,
        'c-project-page__left--turn-page': !isEven && pageFlipDirection === 'right' && currentPage !== 1,
        'c-project-page__right--turn-page': isEven && pageFlipDirection === 'left' && currentPage !== 1,
    });

    if (!pageLoaded) {
        setTimeout(() => setPageLoaded(true), 250);
    }

    const pageContentClass = classnames(`c-project-page__content`, {
        'c-project-page__content--loaded': pageLoaded
    });

    return (
        <section className={pageClass}>
            <section className={pageContentClass}>
                {
                    content.title &&
                        <header className="c-project-page__header">
                            <h2>{content.title}</h2>
                        </header>
                }
                {
                    content.article &&
                        <Article header={content.article.header} text={content.article.text}/>
                }
                {
                    content.info &&
                        <List items={content.info}/>
                }
                {
                    content.gallery &&
                        <ImageSlider gallery={content.gallery} isRight={isEven}/>
                }
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
        </section>
    );
};

export default ProjectPage;
