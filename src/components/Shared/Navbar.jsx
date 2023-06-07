
import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Holder from '../Holder';
import { IdentityContext } from '../../provider/IdentityProvider';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { user, logOut } = useContext(IdentityContext)
    console

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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
                        <Link to="/" className="text-black hover:text-main">
                            Home
                        </Link>
                        <Link to="/instructors" className="text-black hover:text-main">
                            Instructors
                        </Link>
                        {user && (
                            <>
                                <Link to="/dashboard" className="text-black hover:text-main">
                                    Dashboard
                                </Link>
                                <img
                                    src={user.photoURL
                                    }
                                    alt="User Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                            </>
                        )}
                        {user ?
                            <button onClick={logOut} className="btn-primary bg-main py-2 px-4">
                                Logout
                            </button> :
                            <button className="btn-primary bg-main py-2 px-4"><Link to="/login" className=" hover:text-main">
                                Login
                            </Link></button>
                        }
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <FaBars className="w-6 h-6 text-main" />
                        </button>
                    </div>
                </div>

                {showMenu && (
                    <div className="md:hidden bg-main absolute right-12 top-20 w-1/3 rounded py-2">
                        <Link to="/" className="block text-second ml-3 hover:text-main py-1">
                            Home
                        </Link>
                        <Link to="/instructors" className="block text-second ml-3 hover:text-main py-1">
                            Instructors
                        </Link>
                        {user && (
                            <Link to="/dashboard" className="block text-second ml-3 hover:text-main py-1">
                                Dashboard
                            </Link>
                        )}
                        {!user && (
                            <Link to="/login" className="block text-second ml-3 hover:text-main py-1">
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