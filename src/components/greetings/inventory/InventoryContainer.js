import React from "react";
import Inventory from "./Inventory";
import ToggleModal from '../../modal/ToggleModal';

const InventoryContainer = () => (
    <section className="c-inventory-container">
        <ToggleModal
            subTitle="Inventory"
            img="inventory-bag"
            alt="Inventory Bag"
            customeClass="c-greetings-button"
            classBundle="c-greetings-button"
        >
            <section className="c-inventory-container__content o-modal__content">
                <Inventory />
            </section>
        </ToggleModal>
    </section>
);

export default InventoryContainer;
