import '../App.css'
import React from 'react'

export default function Header(){

    return(
        <div className="header" >
            <img className="header-img" src="/logo3.png" alt="Logo" />
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </div>
    )
}