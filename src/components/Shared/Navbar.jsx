import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Holder from '../Holder';
import { IdentityContext } from '../../provider/IdentityProvider';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { user, logOut } = useContext(IdentityContext);
    const location = useLocation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to check if a route is active based on the current location
    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="py-4 bg-second/40">
            <Holder>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-xl font-bold">
                            <img src="logo-melodious.png" alt="" />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {/* Home NavLink */}
                        <NavLink
                            to="/"
                            className={`text-black hover:text-main ${isActiveRoute('/') ? 'text-main' : ''
                                }`}
                        >
                            Home
                        </NavLink>

                        {/* Instructors NavLink */}
                        <NavLink
                            to="/instructors"
                            className={`text-black hover:text-main ${isActiveRoute('/instructors') ? 'text-main' : ''
                                }`}
                        >
                            Instructors
                        </NavLink>

                        {/* Classes NavLink */}
                        <NavLink
                            to="/classes"
                            className={`text-black hover:text-main ${isActiveRoute('/classes') ? 'text-main' : ''
                                }`}
                        >
                            Classes
                        </NavLink>

                        {/* Dashboard NavLink and User Profile */}
                        {user && (
                            <>
                                <NavLink
                                    to="/dashboard"
                                    className={`text-black hover:text-main ${isActiveRoute('/dashboard') ? 'text-main' : ''
                                        }`}
                                >
                                    Dashboard
                                </NavLink>
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="w-8 h-8 rounded-full"
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
                                <NavLink to="/login" className="hover:text-main">
                                    Login
                                </NavLink>
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
                    <div className="md:hidden bg-main absolute right-12 top-20 w-1/3 rounded py-2">
                        <NavLink
                            to="/"
                            className={`block text-second lg:ml-3 hover:text-main py-1 ${isActiveRoute('/') ? 'text-main bg-second' : ''
                                }`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/instructors"
                            className={`block text-second lg:ml-3 hover:text-main py-1 ${isActiveRoute('/instructors') ? 'text-main bg-second' : ''
                                }`}
                        >
                            Instructors
                        </NavLink>
                        <NavLink
                            to="/classes"
                            className={`block text-second lg:ml-3 hover:text-main py-1 ${isActiveRoute('/classes') ? 'text-main bg-second' : ''
                                }`}
                        >
                            Classes
                        </NavLink>
                        {user && (
                            <NavLink
                                to="/dashboard"
                                className={`block text-second lg:ml-3 hover:text-main py-1 ${isActiveRoute('/dashboard') ? 'text-main bg-second' : ''
                                    }`}
                            >
                                Dashboard
                            </NavLink>
                        )}
                        {!user && (
                            <NavLink
                                to="/login"
                                className={`block text-second lg:ml-3 hover:text-main py-1 ${isActiveRoute('/login') ? 'text-main bg-second' : ''
                                    }`}
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                )}
            </Holder>
        </nav>
    );
};

export default Navbar;
