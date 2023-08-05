import React, { useState } from 'react';
import classnames from 'classnames';
import Infobox from "../Infobox"

const Badge = ({badge}) => {
    const [seen, setSeen] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const badgeClass = classnames('c-badge', {
        'c-badge--achieved': badge.achieved,
        'c-badge--seen': seen
    });

    return (
        <article onMouseOver={() => setSeen(true)} className={badgeClass} onClick={() => setShowInfo(!showInfo)}>
            <section className="c-badge__icon-slot">
                <div className="c-badge__icon-placeholder">
                    <img src="/assets/images/fantasy_theme_default-badge.svg" alt="Badge icon placeholder" />
                </div>
                <div className="c-badge__icon">
                    <img src={`/assets/images/${badge.img}.svg`} alt={badge.title} />
                </div>
            </section>
            <Infobox data={badge} view="bottom-left" show={showInfo} />
        </article>
    );
};

export default Badge;
