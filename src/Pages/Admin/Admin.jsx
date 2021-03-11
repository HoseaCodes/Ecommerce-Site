import React, { useState } from 'react';
import AdminNavBar from '../../Components/Admin/adminNavbar';
import Main from '../../Components/Admin/main';
import Sidebar from '../../Components/Admin/sidebar';
import './Admin.css';

const Admin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="admin-container">
            <AdminNavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}

export default Admin;