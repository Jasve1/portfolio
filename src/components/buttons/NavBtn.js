import React from 'react';

const NavBtn = ({
    checkView,
    checkAchieved,
    src,
    inView,
    text,
    imgAlt
}) => {
    const handleClick = () => {
        checkView(true, src);
        checkAchieved('shortcut');
        const elmPos = document.getElementById(src).getBoundingClientRect().top;
        window.scrollBy({
            top: elmPos,
            left: 0,
            behavior: 'smooth'
          });
    };

    return (
        <button
            onClick={handleClick} 
            className={inView ? "c-nav-btn c-nav-btn--active" : "c-nav-btn"}
        >
            <span className="c-nav-btn__text">{text}</span>
            <div className="c-nav-btn__img">
                <img src={`/assets/images/icons/fantasy_theme_${src}-icon.svg`}  alt={imgAlt}/>
            </div>
        </button>
    );
};

export default NavBtn;
