import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import Holder from '../components/Holder';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <>
            <Navbar/>
                <div className='flex w-11/12 mx-auto items-center justify-between'>
            <Sidebar/>
            <Outlet/>
                </div>
            </>
    );
};

export default Dashboard;