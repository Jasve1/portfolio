import React, {useState} from 'react';
import useInfoboxPos from "../../hooks/useInfoboxPos";
import Infobox from "../../Infobox";

const Process = ({src, alt, data}) => {
    const [showInfo, setShowInfo] = useState(false);

    const {
        view,
        changePosition
    } = useInfoboxPos();

    return (
        <section className={`c-process__item c-process__item--${src}`} onMouseEnter={changePosition} onClick={() => setShowInfo(!showInfo)}>
            <img src={`/assets/images/${src}.svg`} className='c-process__img' alt={alt} />
            <Infobox data={data} view={view} show={showInfo} />
        </section>
    );
};

export default Process;