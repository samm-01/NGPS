import React, { useState } from 'react';
import Logo from "./../assets/images/logo.png"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-red-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-10 w-10" />
                    <span className="text-xl font-bold text-white">Next Gen Play School</span>
                </a>

                {/* Hamburger Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="text-white text-2xl focus:outline-none md:hidden"
                    aria-label="Toggle Menu"
                >
                    &#9776; {/* Hamburger Icon */}
                </button>

                {/* Menu Items */}
                <ul
                    className={`${menuOpen ? 'block' : 'hidden'
                        } md:flex space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
                >
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-200">About Us</Link> {/* Use Link here */}

                    </li>
                    <li>
                        <a href="/gallery" className="text-white hover:text-gray-200">
                            Gallery
                        </a>
                    </li>
                    {/* <li>
                        <a href="/journey" className="text-white hover:text-gray-200">
                            Our Journey
                        </a>
                    </li> */}
                    <li>
                        <a href="/disclosures" className="text-white hover:text-gray-200">
                            Mandatory Disclosures
                        </a>
                    </li>
                    <li>
                        <a href="/franchise" className="text-white hover:text-gray-200">
                            Franchise
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-200">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
