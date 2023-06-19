import React from "react";
import Pluse from '../Images/pluse.png'
import '../Styles/Header.css'


const Header = () => {
    return (
        <header>
            <div className="header_left">
                <h2>People <img src={Pluse} alt="pluse" /> </h2>
            </div>
            <div className="header_right">
                <input type="text" placeholder="Search" />
                <button type="button">Filter</button>
            </div>
        </header>
    )
}

export default Header;