import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav className="navbar">
                <a href="#">Shop</a>
                <a href="#">Orders</a>
                <a href="#">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;