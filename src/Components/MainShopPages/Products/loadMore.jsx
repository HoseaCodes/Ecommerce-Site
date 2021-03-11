import React, { useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
// import ProductItem from './ProductItem/Productitem';
import Loading from '../Utils/Loading'
// import axios from 'axios'

const LoadMore = () => {

    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result
    // const [token] = state.token
    // const [callback, setCallback] = state.productsAPI.callback
    const [loading] = useState(false)
    // const [isCheck, setIsCheck] = useState(false)

    if (loading) return <div className="products"><Loading /></div>

    return (
        <>
            <div className="load_more">
                {
                    result < page * 9 ? ""
                        : <button onClick={() => setPage(page + 1)}>Load More</button>
                }
            </div>
        </>
    )
}

export default LoadMore;