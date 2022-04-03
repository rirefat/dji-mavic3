import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-white.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div className="nav-icon">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-menu">
                    <Link to='/'>Home</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;