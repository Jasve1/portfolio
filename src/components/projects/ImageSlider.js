import React, { useState } from 'react';
import classnames from 'classnames';

const ImageSlider = ({gallery, isRight}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [imgEnlarged, setimgEnlarged] = useState(false);
    
    const isDesktop = window.innerWidth > 767
    const responsiveSlideWidth = isDesktop ? 500 : 250;
    const fullSlideWidth = window.innerWidth * 0.8;
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

    const leftArrowClass = classnames('c-project-page-img__arrow  c-project-page-img__arrow--left', {
        'c-project-page-img__arrow--active': currentPage > 0
    });

    const rightArrowClass = classnames('c-project-page-img__arrow  c-project-page-img__arrow--right', {
        'c-project-page-img__arrow--active': currentPage < numOfSlides
    });

    const renderSlideButton = (className, direction) => (
        <div className={className} onClick={() => changePage(direction)}>
            <img src={`/assets/images/arrow-${direction}.svg`} alt={`Arrow ${direction}`} />
        </div>
    );

    const imgSliderClass = classnames('c-project-page-img', {
        'c-project-page-img--enlarged': imgEnlarged,
        'c-project-page-img--enlarged--right': imgEnlarged && isRight,
        'c-project-page-img--enlarged--left': imgEnlarged && !isRight
    });
    
    return (
        <section className={imgSliderClass}>
            {
                gallery.length > 1 &&
                <div className='c-project-page-img__buttons'>
                    {renderSlideButton(leftArrowClass, 'left')}
                    {renderSlideButton(rightArrowClass, 'right')}
                </div>
            }
            <div className="c-project-page-img__slider-wrap">
                <ul className="c-project-page-img__slider" style={{"width" : `${slideWidth * gallery.length}px`, "margin-left" : `-${slideWidth * currentPage}px`}}>
                    {gallery.map((img) => (
                        <li className="c-project-page-img__slide-item" style={{"width" : `${slideWidth}px`}}>
                            <div className="c-project-page-img__slide-img" onClick={() => isDesktop && setimgEnlarged(!imgEnlarged)}>
                                {
                                    img.frame &&
                                    <img src={`/assets/images/${img.frame}`} alt="Frame" className="c-project-page-img__img-frame" />
                                }
                                <img src={`/assets/images/${img.imgSrcHR}`} className={`c-project-page-img__img${img.frame && imgEnlarged && "--gif"}`} alt={img.alt} />
                                <div className="c-project-page-img__expand-retract" >
                                    <img src={`/assets/images/${imgEnlarged ? "retract.svg" : "expand.svg"}`} className={`c-project-page-img__expand-retract--${imgEnlarged ? "retract" : "expand"}`} alt={imgEnlarged ? "retract" : "expand"} />
                                </div>
                            </div>
                            {
                                !imgEnlarged &&
                                <p className="c-project-page-img__slide-descrp">{img.descrp}</p>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ImageSlider;