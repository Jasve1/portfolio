import React from 'react';
import classnames from 'classnames';

const Infobox = ({data, list, view, show}) => {
    const infoClass = classnames(`c-infobox c-infobox--${view}`, {
        'c-infobox--show': show
    });

    return (
        <article className={infoClass}>
            <header className="c-infobox__header">
                <h3>{data.title}</h3>
            </header>
            <section className="c-infobox__content">
                <div className="c-infobox__img">
                    <img src={`/assets/images/fantasy_theme_${data.img}.svg`} alt={data.title} loading="lazy"/>
                </div>
                <section className="c-infobox__text">
                    <p>{data.descrp}</p>
                    {list ? 
                        <ul className="c-infobox__list">
                            {list.map(item => (
                                <li className="c-infobox__item">
                                    <h4>{item}</h4>
                                </li>
                            ))}
                        </ul> :
                        null
                    }
                </section>
            </section>
        </article>
    );
};

export default Infobox;
