import React from 'react';
import useInfoboxPos from "../hooks/useInfoboxPos";
import Infobox from "../../Infobox";

const Skill = ({skill}) => {

    const {
        view,
        changePosition
    } = useInfoboxPos();

    return (
        <section className="c-skill" onMouseEnter={changePosition}>
            <div className="c-skill__icon">
                <img src={`/assets/images/fantasy_theme_${skill.img}.svg`} alt={skill.title}/>  
            </div>
            <Infobox data={skill} list={skill.bonus} view={view}/>
        </section>
    );
};

export default Skill;
