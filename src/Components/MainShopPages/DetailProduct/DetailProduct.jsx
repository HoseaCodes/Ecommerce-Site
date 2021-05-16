import React, { useContext, useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import Header from '../../Headers/Headers';
import NavBar from '../../NavBar/NavBar';
import ProductItem from '../Products/ProductItem/Productitem';
import { GlobalState } from '../../../GlobalState';

const DetailProduct = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setdetailProduct] = useState([])

    useEffect(() => {
        if (params.id) {
            products.forEach(product => {
                if (product._id === params.id) setdetailProduct(product)
            })
        }
    }, [params.id, products])

    if (detailProduct.length === 0) return null;
    const { images, title, price, description, content, sold, category, product_id } = detailProduct;
    return (
        <>
            <NavBar />
            <div className="shop-container">
                <Header className="sidebar" />
                <div>
                    <div className="detail">
                        <img src={images.url} alt="Product Detail" />
                        <div className="box-detail">
                            <div className="row">
                                <h2>{title}</h2>
                                <h6>#id: {product_id}</h6>
                            </div>
                            <span>$ {price}</span>
                            <p>{description}</p>
                            <p>{content}</p>
                            <p>Sold: {sold}</p>
                            <Link to="/cart" className="cart"
                                onClick={() => addCart(detailProduct)}>
                                Buy Now
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2>Related Products</h2>
                        <div className="products">
                            {
                                products.map(product => {
                                    return product.category === category
                                        ? <ProductItem key={product._id} product={product} /> : null
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct;