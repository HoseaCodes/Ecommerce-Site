import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import ProductItem from './ProductItem/Productitem';
import Loading from '../Utils/Loading'

const Products = () => {

    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    console.log(state)
    return (
        <>
            <div className="products">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product} />
                    })
                }

            </div>
            {products.length === 0 && <Loading />}
        </>
    )
}

export default Products;