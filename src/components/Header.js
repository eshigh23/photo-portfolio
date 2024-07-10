import '../App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import About from './About'

export default function Header(){

    const [contactToggle, setContactToggle] = useState(false);

    const handleToggle = () => {
        setContactToggle( prev => !prev )
    }

    return(
        <div className="header" >
            <img className="header-img" src="/logo3.png" alt="Logo" />
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <div className="dropdown">
                    <p className="dropdown-toggle" href="/" onClick={ handleToggle }>Contact</p>
                    {contactToggle && (
                        <div className="dropdown-content">
                        <p> ###-###-#### </p>
                        <p> youremail@gmail.com </p> 
                        </div>
                    ) }
                </div>
            </nav>
        </div>

    )
}