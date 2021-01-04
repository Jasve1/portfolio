import React from 'react';

const GreetingsButton = ({
    title,
    src,
    alt,
    handleClick
}) => (
    <section className="c-greetings-button" onClick={handleClick}>
        <div className="c-greetings-button__img">
            <img src={`/assets/images/fantasy_theme_${src}.svg`} alt={alt}/>
        </div>
        <header className="c-greetings-button__header">
            <h4>{title}</h4>
        </header>
    </section>
);

export default GreetingsButton;
