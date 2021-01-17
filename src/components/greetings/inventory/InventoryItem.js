import React, { useState } from 'react';
import Infobox from "../../Infobox";

const InventoryItem = ({item, view}) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className="c-inventory-item" onClick={() => setShowInfo(!showInfo)}>
            <div className="c-inventory-item__icon">
                <img src={`/assets/images/fantasy_theme_${item.img}.svg`} alt={item.alt}/>  
            </div>
            <Infobox data={item} view={view} show={showInfo} />
        </article>
    );
};

export default InventoryItem;
