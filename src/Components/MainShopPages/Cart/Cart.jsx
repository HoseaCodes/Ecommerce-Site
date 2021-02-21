import React, { useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom'
import './Cart.css';

const Cart = () => {

    const state = useContext(GlobalState);
    const [cart] = state.userAPI.cart
    const [total, setTotal] = useState(0);

    if (cart.length === 0)
        return <h2 style={{ textAlign: 'center', fontSize: "5rem" }}>Cart Is Empty</h2>

    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart">
                        <img src={product.images.url} alt="Product Detail" className="img_container" />
                        <div className="box-detail">
                            <h2>{product.title}</h2>
                            <h3>$ {product.price * product.quanity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <div className="amount">
                                <button type="submit"> - </button>
                                <span>{product.quanity}</span>
                                <button type="submit"> + </button>
                            </div>
                            <div className="delete">X</div>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <h3>Total: $ {total}</h3>
                <Link to="#1">Payment</Link>
            </div>
        </div>
    )
}

export default Cart;