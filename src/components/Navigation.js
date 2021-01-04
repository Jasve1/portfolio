import React from 'react';
import NavBtn from "./buttons/NavBtn";

const Navigation = ({
    projectsInView,
    aboutInView,
    contactInView,
    checkView,
    checkAchieved
}) => {
    let navItems = [
        {
            name: "Projects",
            class: "projects",
            imgAlt: "Swords and Shield",
            inView: projectsInView
        },
        {
            name: "About",
            class: "about",
            imgAlt: "Knight",
            inView: aboutInView
        },
        {
            name: "Contact",
            class: "contact",
            imgAlt: "Crystal Ball",
            inView: contactInView
        }
    ];

    return (
        <nav className="c-navigation">
            <ul className="c-navigation__list">
                {navItems.map(item => (
                    <li key={item.class} className={`c-navigation__list-item c-navigation__list-item--${item.class}`}>
                        <NavBtn 
                            inView={item.inView} 
                            key={item.class} 
                            text={item.name} 
                            src={item.class} 
                            imgAlt={item.imgAlt}
                            checkView={checkView}
                            checkAchieved={checkAchieved}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
