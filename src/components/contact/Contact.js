import React from 'react';
import ContactType from "./ContactType";

const Contact = () => {
    const contactTypes = [
        {
            title: "Instagram",
            msg: "Visit my Instagram account!",
            link: "https://www.instagram.com/jakobkilias/",
            img: "instagram"
        },
        {
            title: "LinkedIn",
            msg: "Travel to my LinkedIn profile!",
            link: "https://www.linkedin.com/in/jakilias/",
            img: "linkedin"
        },
        {
            title: "Email",
            msg: "Send me an Email!",
            link: "mailto:jakobkilias0311@gmail.com",
            img: "email"
        },
        {
            title: "Phone",
            msg: "Call me on (0046) 79 347 74 62!",
            link: "tel:+46793477462",
            img: "phone"
        }
    ];
    
    return (
        <footer className="c-contact">
            <header className="c-contact__header">
                <div className="c-contact__header-img">
                    <img src="/assets/images/icons/fantasy_theme_contact-icon.svg" alt="Crystal Ball"/>
                </div>
            </header>
            <ul className="c-contact__content">
                {contactTypes.map(type => (
                    <li key={type.title} className={`c-contact__list-item c-contact__list-item--${type.img}`}>
                        <ContactType type={type}/>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Contact;