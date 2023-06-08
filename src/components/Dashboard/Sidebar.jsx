import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64">
            <div className=" border p-6 my-5 rounded h-full border-second">
                <div className="">
                    <Link to="manage-classes" className="text-md w-full  bg-white rounded hover:bg-main hover:text-second px-6 py-4 inline-block font-bold">
                        Manage Classes
                    </Link>
                    <Link to="manage-users" className="text-md w-full bg-white hover:bg-main hover:text-second px-6 py-4 inline-block font-bold">
                        Manage Users
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;