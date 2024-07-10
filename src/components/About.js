import React from "react";
import '../About.css'

export default function About() {
    return(
        <div className="grid-container">
            <div className="grid">
                <div className="overlay">
                    <div className="overlay-content">
                        <h2 className="overlay-name"> First Last</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                    <img className=" item item-1" src="https://picsum.photos/600/800"/>
                <img className=" item item-2" src="https://picsum.photos/600/800"/>
                <img className=" item item-3"  src="https://picsum.photos/600/800"/>
                <img className=" item item-4" src="https://picsum.photos/800/600"/>
                <img className=" item item-5"  src="https://picsum.photos/600/800"/>
                <img className=" item item-6"  src="https://picsum.photos/800/600"/>

                <img className=" item item-1" src="https://picsum.photos/600/800"/>
                <img className=" item item-2" src="https://picsum.photos/600/800"/>
                <img className=" item item-3"  src="https://picsum.photos/600/800"/>
                <img className=" item item-4" src="https://picsum.photos/800/600"/>
            </div>
        </div>
    )
}