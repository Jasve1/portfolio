import React from 'react';

const ContactType = ({type}) => {
    const {
        title, 
        msg, 
        link, 
        img
    } = type;
    
    return (
        <a href={link} target="_blank" rel="noreferrer" className="c-contact-type" title={title}>
            <div className="c-contact-type__img">
                <img src={`/assets/images/fantasy_theme_${img}.svg`} alt={title}/>
            </div>
            <p className={`c-contact-type__msg c-contact-type__msg--${img}`}>{msg}</p>
        </a>
    );
};

export default ContactType;