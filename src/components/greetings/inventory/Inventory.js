import React, { useState, useEffect } from "react";
import InventoryNav from "./InventoryNav";
import InventoryList from "./InventoryList";

const Inventory = () => {
    const inventoryList = [
        {
            title: "The Atomic Potion",
            img: "atomic-design",
            alt: "Potion",
            category: "Design",
            descrp: "Drinking this potion will give you the ability to see what things are made of and with this new sight also be able to split things into their most simple form."
        },
        {
            title: "Axe of Accessibility",
            img: "accessibility",
            alt: "Great Axe",
            category: "Best Practice",
            descrp: "This ax can be wielded by anyone and you will always hear, see or feel it coming."
        },
        {
            title: "The Book of Norman",
            img: "donald-norman",
            alt: "Open Book",
            category: "Design",
            descrp: ""
        },
        {
            title: "The Separation of Concerns",
            img: "mvc",
            alt: "Shield with three flowers painted on.",
            category: "Structural Design Patterns",
            descrp: ""
        },
        {
            title: "The Gauntlet of Gestalt",
            img: "gestalt",
            alt: "A gauntlet that is supposed to represent the Gestalt principles.",
            category: "Design",
            descrp: ""
        },
        {
            title: "The Bow of Semantic",
            img: "semantic-html",
            alt: "A bow that can fire three arrows each with a unique purpose.",
            category: "Best Practice",
            descrp: "This bow has arrows for specific purposes. Be sure to use them for the correct one or they will work against you."
        },
        {
            title: "Helm of Specificity Peace",
            img: "itcss",
            alt: "A helmet with the triangle of ITCSS",
            category: "Structural Design Patterns",
            descrp: ""
        },
        {
            title: "Amulet of Process",
            img: "design-thinking",
            alt: "An Amulet",
            category: "Design",
            descrp: "This amulet helps guide you in the right direction."
        },
        {
            title: "Sword of DRY",
            img: "dry",
            alt: "A sword",
            category: "Best Practice",
            descrp: "Repetitions Bane"
        },
        {
            title: "Armour of Modular Components",
            img: "module",
            alt: "An armour",
            category: "Structural Design Patterns",
            descrp: "Interchangeable Plates"
        },
        {
            title: "The Cauldron of Systematic Design",
            img: "design-system",
            alt: "A cauldron",
            category: "Design",
            descrp: ""
        }
    ];

    const categoryList = ["All"];
    let currentInventory = [];
    const numOfSlotsDefault = 2 * Math.round(inventoryList.length / 2);

    const [currentCategory, setCurrentCategory] = useState("All");
    const [numOfSlots, setNumOfSlots] = useState(numOfSlotsDefault);

    inventoryList.forEach(inventoryItem => {
        if(categoryList.indexOf(inventoryItem.category) === -1){
            categoryList.push(inventoryItem.category);
        }
    });

    if( currentCategory === "All" ) {
        currentInventory = inventoryList;
    } else {
        currentInventory = inventoryList.filter(item => item.category === currentCategory);
    }

    const changeNumOfSlots = () => {
        const inventory = document.querySelector('.c-inventory-list__content');
        const item = document.querySelector('.c-inventory-list__item');
        if (inventory && item) {
            const itemsFit = Math.floor(inventory.clientWidth / item.offsetWidth);
            const remainder = numOfSlotsDefault % itemsFit;
            let missingSlots = remainder > 0 ? itemsFit - remainder : 0;
            setNumOfSlots(numOfSlotsDefault + missingSlots);
        }
    };

    useEffect(() => {
        changeNumOfSlots();
        window.addEventListener('resize', changeNumOfSlots);
    });
    
    return (
        <section className="c-inventory">
            <InventoryNav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} categoryList={categoryList}/>
            <InventoryList currentInventory={currentInventory} numOfSlots={numOfSlots}/>
        </section>
    );
};

export default Inventory;
