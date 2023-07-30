import React from 'react';

const Article = ({header, text}) => (
    <article className="c-project-page__article">
        <h3>{header}</h3>
        <p>{text}</p>
    </article>
);

export default Article;