import React, { useContext, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import NavBar from "../../NavBar/NavBar";
import { GlobalState } from '../../../GlobalState';

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
 
    useEffect(() => {
        if (token) {
            const getHistory = async () => {
                if (isAdmin) {
                    const res = await axios.get('/api/payment', {
                        headers: { Authorization: token }
                    })
                    setHistory(res.data)
                } else {
                    const res = await axios.get('/user/history', {
                        headers: { Authorization: token }
                    })
                    setHistory(res.data)
                }
            }

            getHistory()
        }
    }, [token, isAdmin, setHistory])

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    return (
    <>
        <NavBar />
        <div className="history-page">
            <div className="history-title-wrapper">
                <h1>History</h1>
                <h2>You have {history.length} pervious orders.</h2>
            </div>
            <div className="history-details-wrapper">
                    <div className="history-details-container">
                    {
                        history.map(items => (
                        <>
                            <div className="history-details">
                                <h3>{items.paymentID}</h3>
                                <h2>Payment ID</h2>
                            </div>
                            <div className="history-details">
                                <h3>{new Date(items.createdAt).toLocaleDateString('en-US', options)}</h3>
                                <h2>Date of Purchases</h2>
                            </div>
                            <div className="history-details">
                                <Link to={`/history/${items._id}`}>View</Link>
                            </div>
                        </>
                        ))
                    }
                    </div>
            </div>
        </div>
    </>
    )
}

export default OrderHistory