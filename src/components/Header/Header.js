import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;