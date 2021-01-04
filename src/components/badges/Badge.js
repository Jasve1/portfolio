import React from 'react';
import Infobox from "../Infobox"

const Badge = ({badge}) => (
    <article className={`c-badge ${badge.achieved ? "c-badge--achieved" : ""}`}>
        <section className="c-badge__icon-slot">
            <div className="c-badge__icon-placeholder">
                <img src="/assets/images/fantasy_theme_default-badge.svg" alt="Badge icon placeholder"/>
            </div>
            <div className="c-badge__icon">
                <img src={`/assets/images/fantasy_theme_${badge.img}.svg`} alt={badge.title}/>
            </div>
        </section>
        <Infobox data={badge} view="bottom-left"/>
    </article>
);

export default Badge;
