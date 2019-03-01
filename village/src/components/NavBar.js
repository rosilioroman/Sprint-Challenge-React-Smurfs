import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <header className="navbar">
            <h1 className="title">Smurf Village</h1>
            <nav className="nav-links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/smurf-form">Add New Smurf</NavLink>
            </nav>
        </header>
    );
}

export default NavBar;