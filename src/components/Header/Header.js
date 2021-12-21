import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">App</NavLink></li>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/counter/redux">Counter Redux</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;