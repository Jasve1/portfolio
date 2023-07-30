import React from 'react';

const List = ({items}) => (
    <ul className="c-project-page__list">
        {items.map((item) => (
            <li className="c-project-page__list-item">
                <h4 className="c-project-page__item-header">{item.title}: </h4>
                <p>{item.text}</p>
            </li>
        ))}
    </ul>
);

export default List;