import React, { useState } from 'react';
import classnames from 'classnames';

const ImageSlider = ({gallery, isRight}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [imgEnlarged, setimgEnlarged] = useState(false);
    
    const responsiveSlideWidth = window.innerWidth > 767 ? 500 : 300;
    const fullSlideWidth = window.innerWidth > 767 ? window.innerWidth * 0.6 : window.innerWidth * 0.9;
    const slideWidth = imgEnlarged ? fullSlideWidth : responsiveSlideWidth;
    const numOfSlides = gallery ? gallery.length - 1 : 0;

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

    const imgSliderClass = classnames('c-project-page__slider-wrap', {
        'c-project-page__slider-wrap--enlarged': imgEnlarged,
        'c-project-page__slider-wrap--enlarged--right': imgEnlarged && isRight,
        'c-project-page__slider-wrap--enlarged--left': imgEnlarged && !isRight
    });
    
    return (
        <div className={imgSliderClass}>
            {
                gallery.length > 1 &&
                renderSlideButton(leftArrowClass, 'left')
            }
            {
                gallery.length > 1 &&
                renderSlideButton(rightArrowClass, 'right')
            }
            <ul className="c-project-page__slider" style={{"width" : `${slideWidth * gallery.length}px`, "margin-left" : `-${slideWidth * currentPage}px`}}>
                {gallery.map((img) => (
                    <li className="c-project-page__slide-item" style={{"width" : `${slideWidth}px`}}>
                        <div className="c-project-page__slide-img" onClick={() => setimgEnlarged(!imgEnlarged)}>
                            {
                                img.frame &&
                                <img src={`/assets/images/${img.frame}`} alt="Frame" className="c-project-page__img-frame" />
                            }
                            <img src={`/assets/images/${img.imgSrcHR}`} className={`c-project-page__img${img.frame && imgEnlarged && "--gif"}`} alt={img.alt} />
                            <div className="c-project-page__expand-retract" >
                                <img src={`/assets/images/${imgEnlarged ? "retract.svg" : "expand.svg"}`} className={`c-project-page__expand-retract--${imgEnlarged ? "retract" : "expand"}`} alt={imgEnlarged ? "retract" : "expand"} />
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
    );
};

export default ImageSlider;