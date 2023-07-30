import React, { useState } from "react";
import classnames from 'classnames';

const SlideArrows = ({currentPage, setCurrentPage, showSinglePage, length, setPageFlipDirection}) => {
    const [pageNr, setPageNr] = useState(1);

    const pageChange = showSinglePage ? 1 : 2;

    const maxLength = showSinglePage ? length : Math.ceil(length/2);

    const changePage = (direction) => {
        setPageFlipDirection(direction);

        if (direction === 'left' && currentPage > 0) {
            setCurrentPage(currentPage - pageChange);
            setPageNr(pageNr - 1);
        }
        
        if (direction === 'right' && currentPage < length - 1) {
            setCurrentPage(currentPage + pageChange);
            setPageNr(pageNr + 1);
        }
    }

    const leftArrowClass = classnames('c-project__arrow  c-project__arrow--left', {
        'c-project__arrow--active': currentPage > 0
    });

    const rightArrowClass = classnames('c-project__arrow  c-project__arrow--right', {
        'c-project__arrow--active': currentPage < length - 1
    });

    if (length > 2 || showSinglePage && length > 1) {
        return (
            <section className="c-project__arrows">
                <div className={leftArrowClass} onClick={() => changePage('left')}>
                    <img src={`/assets/images/arrow-left.svg`} alt="Arrow left" />
                </div>
                <h3>{pageNr}/{maxLength}</h3>
                <div className={rightArrowClass} onClick={() => changePage('right')}>
                    <img src={`/assets/images/arrow-right.svg`} alt="Arrow right" />
                </div>
            </section>
        );
    }
    return null;
}

export default SlideArrows;