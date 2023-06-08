import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import Holder from '../components/Holder';

const Dashboard = () => {
    
    return (
        <>
            <Navbar/>
            <Holder>
            <Sidebar/>
            </Holder>
            </>
    );
};

export default Dashboard;