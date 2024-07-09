import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;