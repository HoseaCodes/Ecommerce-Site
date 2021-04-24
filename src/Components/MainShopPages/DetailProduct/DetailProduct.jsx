import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import NavBar from '../../NavBar/NavBar';
import Header from '../../Headers/Headers';
import ProductItem from '../Products/ProductItem/Productitem';

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

    return (
        <>
            <NavBar />
            <div className="shop-container">
                <Header className="sidebar" />
                <div>
                    <div className="detail">
                        <img src={detailProduct.images.url} alt="Product Detail" />
                        <div className="box-detail">
                            <div className="row">
                                <h2>{detailProduct.title}</h2>
                                <h6>#id: {detailProduct.product_id}</h6>
                            </div>
                            <span>$ {detailProduct.price}</span>
                            <p>{detailProduct.description}</p>
                            <p>{detailProduct.content}</p>
                            <p>Sold: {detailProduct.sold}</p>
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
                                    return product.category === detailProduct.category
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