import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <Link to="/" className="Header-LogoContainer">
                    <img src={Logo} className="Header-Logo" alt="Logo" />
                </Link>

                <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>

                <nav className="Header-Nav">
                    <NavLink exact to="/" activeStyle={{ color: "#d33e3e" }} className="Header-NavItem">Home</NavLink>
                    <NavLink exact to="/events" activeStyle={{ color: "#d33e3e" }} className="Header-NavItem">Events</NavLink>
                </nav>
            </div>

        </header>
    );
};

export default Header;