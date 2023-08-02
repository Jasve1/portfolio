import React from 'react';
import { PROCESS_ITEMS } from '../constants/processDescriptions';
import ProcessItem from "./ProcessItem";

const Process = () => {
    return (
        <section className='c-process'>
            <header className="c-process__header">
                <h3>My Process</h3>
            </header>
            <section className='c-process__visuals'>
                {PROCESS_ITEMS.map((item) => (
                    <ProcessItem src={item.src} alt={item.alt} data={item.data} />
                ))}
            </section>
        </section>
    );
};

export default Process;