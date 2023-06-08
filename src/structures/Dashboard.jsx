import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import Holder from '../components/Holder';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <>
            <Navbar/>
            <Holder>
                <div className='flex justify-between'>
            <Sidebar/>
            <Outlet/>
                </div>
            </Holder>
            </>
    );
};

export default Dashboard;