import React from 'react';

const InventoryNav = ({
    currentCategory,
    setCurrentCategory,
    categoryList
}) => {

    const handleClick = (e) => setCurrentCategory(e.target.id);

    return (
        <nav className="c-inventory-nav">
            <ul className="c-inventory-nav__list">
                {categoryList.map(category => (
                    <li className={`c-inventory-nav__list-item 
                        ${
                            currentCategory === category ? "c-inventory-nav__list-item--current" : ""
                        }`}
                        id={category}
                        onClick={handleClick}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default InventoryNav;
