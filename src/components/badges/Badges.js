import React from 'react';
import Badge from "./Badge";

const Badges = ({
    trophyBadge,
    allProjectsBadge,
    bottomBadge,
    firstProjectBadge,
    shortcutBadge
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

    return (
        <ul className="c-badges">
            {badges.map(badge => (
                <li className="c-badges__item">
                    <Badge badge={badge}/>
                </li>
            ))}
        </ul>
    );
};

export default Badges;
