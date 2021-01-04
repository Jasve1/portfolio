import React from 'react';
import Infobox from "../../Infobox";

const InventoryItem = ({item, view}) => (
    <article className="c-inventory-item">
        <div className="c-inventory-item__icon">
            <img src={`/assets/images/fantasy_theme_${item.img}.svg`} alt={item.alt}/>  
        </div>
        <Infobox data={item} view={view}/>
    </article>
);

export default InventoryItem;
