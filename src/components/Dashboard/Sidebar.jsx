import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Function to check if a link is active based on the current location
    const isLinkActive = (pathname) => {
        console.log(location)
        return location.pathname === pathname;
    };

    return (
        <div className="w-64">
            <div className="border p-6 my-5 rounded h-full border-second">
                <div className="space-y-2">
                    <div className={`rounded ${isLinkActive('/dashboard/manage-classes') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="manage-classes"
                            className={` w-full rounded hover:bg-main hover:text-second px-6 py-4 inline-block font-bold`}
                        >
                            Manage Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/manage-users') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="manage-users"
                            className={` w-full rounded hover:bg-main hover:text-second px-6 py-4 inline-block font-bold`}
                        >
                            Manage Users
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
