import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import Holder from '../components/Holder';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Dashboard = () => {
    
    return (
        <>
            <Navbar/>
                <div className='flex w-11/12 my-20 mx-auto items-start justify-between'>
            <Sidebar/>
            <Outlet/>
                </div>
                <Footer/>
            </>
    );
};

export default Dashboard;