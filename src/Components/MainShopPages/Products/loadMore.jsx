import React, { useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import Loading from '../Utils/Loading'

// Load additional Products for pagination
const LoadMore = () => {

    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result
    const [loading] = useState(false)

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