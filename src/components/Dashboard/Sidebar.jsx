import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaUsers } from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation();

    // Function to check if a link is active based on the current location
    const isLinkActive = (pathname) => {
        console.log(location)
        return location.pathname === pathname;
    };

    return (
        <div className="w-72">
            <div className="border-2 p-8 my-5 rounded-md h-full border-second">
                <div className="space-y-2">
                    <div className={`rounded ${isLinkActive('/dashboard/manage-classes') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="manage-classes"
                            className={`flex items-center justify-evenly w-full rounded hover:bg-main hover:text-second px-6 py-4 font-bold`}
                        >
                           <SiGoogleclassroom size={22}/> Manage Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/manage-users') ? 'bg-main text-second' : ''}`}>
                    <Link
                            to="manage-users"
                            className={`flex items-center justify-evenly w-full rounded hover:bg-main hover:text-second px-6 py-4 font-bold`}
                        >
                            <FaUsers size={22}/>Manage Users
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
