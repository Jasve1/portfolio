import React from 'react';

const Header = () => {

    const handleClick = () => {
        const elmPos = document.getElementById('top').getBoundingClientRect().top;
        window.scrollBy({
            top: elmPos,
            left: 0,
            behavior: 'smooth'
          })
    }

    return (
        <header className="c-header">
            <button onClick={handleClick} className="c-header__logo" id="logo">
                <img src="/assets/images/icons/fantasy_theme_home-icon.svg"  alt="Castle"/>
            </button>
            <div className="c-header__text"><h4>Portfolio</h4></div>
            <h4 className="c-header__text">Jakob Kilias Svenningsen</h4>
        </header>
    )
}

export default Header;
