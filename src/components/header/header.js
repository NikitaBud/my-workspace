import React from 'react';
import './header.css';
import icon from './puzzle-piece.svg';

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src={icon} alt="logo" />
            </div>
        </header>
    );
};

export default Header;