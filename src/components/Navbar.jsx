import React, {useState, useEffect} from 'react'
import {navLinks} from "../constants";

function Navbar() {  // track if the user has scrolled down the page
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // create an event listener for when the user scrolls
        const handleScroll = () => {
            // check if the user has scrolled down at least 10px
            // if so, set the state to true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        // add the event listener to the window
        window.addEventListener("scroll", handleScroll);

        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Abdullah R
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href={import.meta.env.VITE_APP_RESUME_LINK}
                   className="contact-btn group" download>
                    <div className="inner">
                        <span>Download CV</span>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default Navbar
