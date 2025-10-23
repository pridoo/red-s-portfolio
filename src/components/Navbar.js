import React from 'react';
import "./Navbar.css";

import { FaHome, FaUser, FaBriefcase } from "react-icons/fa"; 

function Navbar({ currentPage, handlePageChange }) {


    const navItems = [
        { name: 'Home', icon: FaHome },
        { name: 'About', icon: FaUser },
        { name: 'Works', icon: FaBriefcase },
    ];

    return (
        <nav className="floating-footer">
            <ul>
                {navItems.map((item) => (
                    <li 
                        key={item.name}
                        onClick={() => handlePageChange(item.name)}
                        className={item.name === currentPage ? 'active' : ''}
                    >
                        <item.icon />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;