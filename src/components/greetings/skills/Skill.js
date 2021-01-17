import React, { useState } from 'react';
import useInfoboxPos from "../../hooks/useInfoboxPos";
import Infobox from "../../Infobox";

const Skill = ({skill}) => {
    const [showInfo, setShowInfo] = useState(false);

    const {
        view,
        changePosition
    } = useInfoboxPos();

    return (
        <section className="c-skill" onMouseEnter={changePosition} onClick={() => setShowInfo(!showInfo)}>
            <div className="c-skill__icon">
                <img src={`/assets/images/fantasy_theme_${skill.img}.svg`} alt={skill.title}/>  
            </div>
            <Infobox data={skill} list={skill.bonus} view={view} show={showInfo} />
        </section>
    );
};

export default Skill;
