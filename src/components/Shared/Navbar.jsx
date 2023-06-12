import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Holder from '../Holder';
import { IdentityContext } from '../../provider/IdentityProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({handleDarkModeToggle, isDarkMode}) => {
    const [showMenu, setShowMenu] = useState(false);
    const { user, logOut } = useContext(IdentityContext);
    const location = useLocation();


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to check if a route is active based on the current location
    const onClickRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="py-4 bg-second/40">
            <Holder>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink to="/" className="text-white text-xl font-bold">
                            <img src="https://i.ibb.co/fGnyKJP/logo-melodious.png" alt="" />
                        </NavLink>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {/* Home NavLink */}
                        <button className="toggle-button" onClick={handleDarkModeToggle}>
                            {isDarkMode ? <FaMoon className="toggle-icon" /> : <FaSun className="toggle-icon" />}
                        </button>
                        <NavLink
                            to="/"
                            onClick={() => onClickRoute('/')}
                            className={`text-black hover:text-main ${onClickRoute('/') ? 'text-main' : ''
                                }`}
                        >
                            Home
                        </NavLink>

                        {/* Instructors NavLink */}
                        <NavLink
                            to="/instructors"
                            onClick={() => onClickRoute('/instructors')}
                            className={`text-black hover:text-main ${onClickRoute('/instructors') ? 'text-main' : ''
                                }`}
                        >
                            instructors
                        </NavLink>

                        {/* Classes NavLink */}
                        <NavLink
                            to="/classes"
                            onClick={() => onClickRoute('/classes')}
                            className={`text-black hover:text-main ${onClickRoute('/classes') ? 'text-main' : ''
                                }`}
                        >
                            classes
                        </NavLink>

                        {/* Dashboard NavLink and User Profile */}
                        {user && (
                            <>
                                <NavLink
                                    to="/dashboard"
                                    onClick={() => onClickRoute('/dashboard')}
                                    className={`text-black hover:text-main ${onClickRoute('/dashboard') ? 'text-main' : ''
                                        }`}
                                >
                                    dashboard
                                </NavLink>
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="w-8 h-8 rounded-full object-cover object-center"
                                />
                            </>
                        )}

                        {/* Logout or Login NavLink */}
                        {user ? (
                            <button onClick={logOut} className="btn-primary bg-main py-2 px-4">
                                Logout
                            </button>
                        ) : (
                            <button className="btn-primary bg-main py-2 px-4">
                                <Link to="/login" className="hover:text-main">
                                    Login
                                </Link>
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <FaBars className="w-6 h-6 text-main" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {showMenu && (
                    <div className="md:hidden z-10 bg-main absolute right-12 top-20 w-1/3 rounded py-2 pl-4 border-2 border-second">
                        <button className="toggle-button" onClick={handleDarkModeToggle}>
                            {isDarkMode ? <FaMoon className="toggle-icon text-second" /> : <FaSun className="toggle-icon text-second" />}
                        </button>
                        <NavLink
                            to="/"
                            className="block text-second"

                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/instructors"
                            className="block text-second"
                        >
                            instructors
                        </NavLink>
                        <NavLink
                            to="/classes"
                            className="block text-second"
                        >
                            classes
                        </NavLink>
                        {user && (
                            <NavLink
                                to="/dashboard"
                                className="block text-second"
                            >
                                dashboard
                            </NavLink>
                        )}
                        {!user && (
                            <Link
                                to="/login"
                                className="block text-second"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                )}
            </Holder>
        </nav>
    );
};

export default Navbar;
