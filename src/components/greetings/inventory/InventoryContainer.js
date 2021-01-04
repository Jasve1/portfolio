import React from "react";
import Inventory from "./Inventory";
import GreetingsModal from '../GreetingsModal';

const InventoryContainer = ({setModalOpen}) => (
    <section className="c-inventory-container">
        <GreetingsModal
            setModalOpen={setModalOpen}
            title="Inventory"
            src="inventory-bag"
            alt="Inventory Bag"
        >
            <section className="c-inventory-container__content o-modal__content">
                <Inventory />
            </section>
        </GreetingsModal>
    </section>
);

export default InventoryContainer;
