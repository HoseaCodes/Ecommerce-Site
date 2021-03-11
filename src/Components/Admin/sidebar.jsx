import React from 'react'
import './sidebar.css';
import Avatar from '../../Images/anime.jpg'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={Avatar} alt="logo" />
                    <h1>Codersbite</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon"
                    onClick={() => closeSidebar()}></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="">Admin Management</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="">Employee Management</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="">Warehouse</a>
                </div>

                <div className="sidebar__link">
                    <i class="fas fa-file-contract"></i>
                    <a href="">Contracts</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar__link">
                    <i class="far fa-question-circle"></i>
                    <a href="">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-sign-out-alt"></i>
                    <a href="">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-calendar-day"></i>
                    <a href="">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-file"></i>
                    <a href="">Apply for leave</a>
                </div>
                <h2>Payroll</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money-bill"></i>
                    <a href="">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="">Paygrade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="">Log Out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;