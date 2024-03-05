import React from 'react'
import {Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutpage'>About Us</Link></li>
                    <li><Link to='/countrypage'>Countries</Link></li>
                    <li><Link to='/gallerypage'>Gallery</Link></li>
                    <li><Link to='/contactpage'>Contact Us</Link></li>
                </ul>
            </nav>
        </div>

    );
};

export default Navbar;
