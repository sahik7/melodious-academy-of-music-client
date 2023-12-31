import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BsCollectionFill } from 'react-icons/bs';
import { ImDownload } from 'react-icons/im';
import { MdPayments,MdOutlineHistory } from 'react-icons/md';
import usePositionVerify from '../../hooks/usePositionVerify';

const Sidebar = () => {
    const location = useLocation();
    const {validPosition} = usePositionVerify();
    const isLinkActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <div className="w-72">
            {/* Admin Dashboard */}
            {validPosition === 'admin' && <><h1 className='text-2xl -mt-14 text-black font-bold'>Admin Dashboard</h1>
            <div className="border-2 p-8 my-5 rounded-md border-second">
                <div className="space-y-2">
                    <div className={`rounded ${isLinkActive('/dashboard/manage-classes') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="manage-classes"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                           <SiGoogleclassroom  className='mx-4' size={22}/> Manage Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/manage-users') ? 'bg-main text-second' : ''}`}>
                    <Link
                            to="manage-users"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                            <FaUsers className='mx-4' size={22}/>Manage Users
                        </Link>
                    </div>

                </div>
            </div></>}
            {/* Student Dashboard */}
      {validPosition === 'student' && <><h1 className='text-2xl text-black -mt-14 font-bold'>Student Dashboard</h1>
            <div className="border-2 p-8 my-5 rounded-md h-full border-second">
                <div className="space-y-2">
                    <div className={`rounded ${isLinkActive('/dashboard/selected-class') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="selected-class"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second py-4 font-bold`}
                        >
                           <ImDownload className='mx-3' size={22}/>My Selected Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/enrolled-classes') ? 'bg-main text-second' : ''}`}>
                    <Link
                            to="enrolled-classes"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                            <MdPayments className='mx-4' size={22}/>My Enrolled Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/payment-history') ? 'bg-main text-second' : ''}`}>
                    <Link
                            to="payment-history"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                            <MdOutlineHistory className='mx-4' size={22}/>Payment History
                        </Link>
                    </div>

                </div>
            </div></>}
            {/* Instructor Dashboard */}
      {validPosition === 'instructor' && <><h1 className='text-2xl text-black mt-10 font-bold'>Instructor Dashboard</h1>
            <div className="border-2 p-8 my-5 rounded-md h-full border-second">
                <div className="space-y-2">
                    <div className={`rounded ${isLinkActive('/dashboard/my-classes') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="my-classes"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                           <BsCollectionFill className='mx-4' size={22}/>My Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/adding-class') ? 'bg-main text-second' : ''}`}>
                    <Link
                            to="adding-class"
                            className={`flex items-center w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                            <AiOutlineVideoCameraAdd  className='mx-4' size={22}/>Add a Class
                        </Link>
                    </div>

                </div>
            </div></>}
            {/* <h1 className='text-2xl text-black mt-10 font-bold'>Admin Dashboard</h1> */}
            {/* <div className="border-2 p-8 my-5 rounded-md h-full border-second">
                <div className="space-y-2">
                    <div className={`rounded ${isLinkActive('/dashboard/manage-classes') ? 'bg-main text-second' : ''}`}>
                        <Link
                            to="manage-classes"
                            className={`flex items-center justify-evenly w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                           <SiGoogleclassroom size={22}/> Manage Classes
                        </Link>
                    </div>
                    <div className={`rounded ${isLinkActive('/dashboard/manage-users') ? 'bg-main text-second' : ''}`}>
                    <Link
                            to="manage-users"
                            className={`flex items-center justify-evenly w-full rounded hover:bg-main hover:text-second  py-4 font-bold`}
                        >
                            <FaUsers size={22}/>Manage Users
                        </Link>
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default Sidebar;
