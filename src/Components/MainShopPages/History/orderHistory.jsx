import React, { useContext, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="history-page">
            <h2>History</h2>
            <h4>You have {history.length} pervious orders.</h4>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Date of Purchases</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(items => (
                                <tr key={items.id}>
                                    <td>{items.paymentID}</td>
                                    <td>{new Date(items.createdAt).toLocaleDateString('en-US', options)}</td>
                                    <td><Link to={`/history/${items._id}`}>View</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderHistory