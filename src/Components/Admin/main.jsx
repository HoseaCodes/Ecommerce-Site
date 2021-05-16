import React from 'react';

import Avatar from '../../Images/anime.jpg'
import Chart from './chart';

import './main.css';
import '../../../node_modules/react-vis/dist/style.css';


//Dashboard View
const Main = ({ sidebarOpen, openSidebar }) => {

    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={Avatar} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello Codersbite</h1>
                        <p>Welcome to your admin Dashboard</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <i className="fas fa-user fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Number of Subscribers
                            </p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Times of Watching
                            </p>
                            <span className="font-bold text-title">2487</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Number of Videos
                            </p>
                            <span className="font-bold text-title">340</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Number of Likes
                            </p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Houston, TX</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Houston, TX</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Sales</h1>
                                <p>$255,300</p>
                            </div>
                            <div className="card2">
                                <h1>Users</h1>
                                <p>5,300</p>
                            </div>
                            <div className="card3">
                                <h1>Orders</h1>
                                <p>2,300</p>
                            </div>
                            <div className="card4">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Main;