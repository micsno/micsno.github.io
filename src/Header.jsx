import '/src/Header.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.svg';

const navBar = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Projects', path: '/projects' },
    { id: 4, name: 'Contact', path: '/contact' },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navBarRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when clicking outside of menu or hamburger button
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navBarRef.current &&
                !navBarRef.current.contains(event.target) &&
                !hamburgerRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <Link to="/" className="nav-logo">
                <img src={logo} alt="Logo" />
            </Link>
            <button 
                className="hamburger" 
                onClick={toggleMenu} 
                aria-label="Toggle navigation menu"
                ref={hamburgerRef}
            >
                ☰
            </button>

            <nav 
                className={`nav-bar ${isMenuOpen ? 'open' : ''}`} 
                ref={navBarRef}
            >
                <ul className="nav-list">
                    {navBar.map((item) => (
                        <li key={item.id} className="nav-item">
                            <Link 
                                to={item.path} 
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
