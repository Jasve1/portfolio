import React from 'react';
import useInfoboxPos from "../hooks/useInfoboxPos";
import InventoryItem from "./InventoryItem";

const InventoryList = ({ currentInventory, numOfSlots }) => {
    const {
        view,
        changePosition
    } = useInfoboxPos();

    const itemSlots = () => {
        let slots = []
        for(let i = 0; i < numOfSlots; i++){
            if(currentInventory[i] !== undefined){
                slots.push(
                    <li className="c-inventory-list__item" onMouseEnter={changePosition}>
                        <InventoryItem item={currentInventory[i]} view={view}/>
                    </li>
                );
            } else {
                slots.push(<li className="c-inventory-list__item"></li>);
            }
        }
        return slots;
    }

    return (
        <section className="c-inventory-list">
           <ul className="c-inventory-list__content">
                {itemSlots()}
            </ul> 
        </section>
    );
};

export default InventoryList;