import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex">
                <div className="w-64 h-screen">
                    <nav className="mt-10">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/manage-classes" className="text-blue-500 hover:text-blue-700 block">
                                    Manage Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-users" className="text-blue-500 hover:text-blue-700 block">
                                    Manage Users
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
};

export default Sidebar;