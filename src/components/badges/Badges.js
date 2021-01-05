import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Badge from "./Badge";

const Badges = ({
    trophyBadge,
    allProjectsBadge,
    bottomBadge,
    firstProjectBadge,
    shortcutBadge,
    numAchieved
}) => {
    const badges = [
        {
            title: "Hope you've enjoyed the show",
            img: "trophy-badge",
            descrp: "You have been through it all. You have travelt with me through thick and thin and nothing has led you astray from this noble quest. None deserve this badge more so than you.",
            achieved: trophyBadge
        },
        {
            title: "Champion",
            img: "all-projects-badge",
            descrp: "None can disclaim the magnitute of this heroic deed. You have sat through all of my presentations and can now proclaim yourself a true champion for which I grant you this badge.",
            achieved: allProjectsBadge
        },
        {
            title: "Let's get to the bottom of this",
            img: "bottom-badge",
            descrp: "FINALLY! You've reached the bottom of the page. For your perseverance I salute you with this well earned badge.",
            achieved: bottomBadge
        },
        {
            title: "Warrior",
            img: "first-project-badge",
            descrp: "Like a true warrior you have fought your way through a presentation of one of my project. Though your journey is yet to be over you still dicerve some praise. I award you this badge, wear it with honour.",
            achieved: firstProjectBadge
        },
        {
            title: "Taking a shortcut",
            img: "shortcut-badge",
            descrp: "CONGRATULATIONS! Rest your tired index finger you've discovered the joy of this magic pathway. This shortcut lets you skip a lot of tedious scrolling and earns you this amazing badge.",
            achieved: shortcutBadge
        }
    ];

    const [show, setShow] = useState(false);
    const [showNum, setShowNum] = useState(false);

    const handleClick = () => {
        setShow(!show);
        setShowNum(false);
    };

    useEffect(() => {
        if (!show && numAchieved > 0) {
            setShowNum(true);
        }
    }, [numAchieved]);

    const trophyClass = classnames('c-badges__trophy', {
        'c-badges__trophy--show': show,
        'c-badges__trophy--active': showNum || allProjectsBadge
    });

    const badgeClass = classnames('c-badges__item', {
        'c-badges__item--show': show
    });

    return (
        <div className="c-badges">
            <ul className="c-badges__list">
                {badges.map(badge => (
                    <li key={badge.title} className={badgeClass}>
                        <Badge badge={badge}/>
                    </li>
                ))}
            </ul>
            <div className={trophyClass} onClick={handleClick}>
                {
                    showNum &&
                    <span className="c-badges__trophy-num">{numAchieved}</span>
                }
                <img src={`/assets/images/trophy.svg`} alt="trophy" />
            </div>
        </div>
    );
};

export default Badges;
