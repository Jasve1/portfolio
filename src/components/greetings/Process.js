import React, {useState} from 'react';
import { PROCESS_ITEMS } from './constants/processDescriptions';
import useInfoboxPos from "../hooks/useInfoboxPos";
import Infobox from "../Infobox";

const Process = () => {
    const [showInfo, setShowInfo] = useState(false);

    const {
        view,
        changePosition
    } = useInfoboxPos();

    return (
        <section className='c-process'>
            <header className="c-process__header">
                <h3>My Process</h3>
            </header>
            <section className='c-process__visuals'>
                {PROCESS_ITEMS.map((item) => (
                    <section className={`c-process__item c-process__item--${item.src}`} onMouseEnter={changePosition} onClick={() => setShowInfo(!showInfo)}>
                        <img src={`/assets/images/${item.src}.svg`} className='c-process__img' alt={item.alt} />
                        <Infobox data={item.data} view={view} show={showInfo} />
                    </section>
                ))}
            </section>
        </section>
    );
};

export default Process;