import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div
            id='header'
        >
            <NavLink to='/'>
                <i className="fas fa-home"></i>
            </NavLink>
        </div>);
}

export default Header;
