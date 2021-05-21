import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import "./Cart.css";
import axios from "axios";
import PaypalButton from "./PaypalButton";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";

const Cart = () => {
	const state = useContext(GlobalState);
	const [cart, setCart] = state.userAPI.cart;
	const [token] = state.token;
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const getTotal = () => {
			const total = cart.reduce((prev, item) => {
				return prev + item.price * item.quantity;
			}, 0);
			setTotal(total);
		};
		getTotal();
	}, [cart]);

	const addToCart = async (cart) => {
		await axios.patch(
			"/user/addcart",
			{ cart },
			{
				headers: { Authorization: token },
			}
		);
	};

	const increment = (id) => {
		cart.forEach((item) => {
			if (item._id === id) {
				item.quantity += 1;
			}
		});
		setCart([...cart]);
		addToCart(cart);
	};

	const decrement = (id) => {
		cart.forEach((item) => {
			if (item._id === id) {
				item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
			}
		});
		setCart([...cart]);
		addToCart(cart);
	};

	const removeProduct = (id) => {
		if (window.confirm("Do you want to delete this product?")) {
			cart.forEach((item, index) => {
				if (item._id === id) {
					cart.splice(index, 1);
				}
			});
			setCart([...cart]);
			addToCart(cart);
		}
	};
	//after transaction is approved function
	const tranSuccess = async (payment) => {
		const { paymentID, address } = payment;

		await axios.post(
			"/api/payment",
			{ cart, paymentID, address },
			{
				headers: { Authorization: token },
			}
		);
		setCart([]);
		addToCart([]);
		alert("You have successfully placed an order.");
	};

	if (cart.length === 0)
		return (
			<>
				<NavBar />
				<div class="container-fluid mt-100">
					<div class="row">
						<div class="col-md-12">
							<div class="cart-card">
								<div class="cart-card-body empty-cart">
									<div class="col-sm-12 empty-cart-cls text-center">
										{" "}
										<img
											src="https://i.imgur.com/jjWQ0AQ.png"
											width="130"
											height="130"
											class="img-fluid mb-4 mr-3"
										/>
										<h3>
											<strong>Your Cart is Empty</strong>
										</h3>
										<h4>Add something to make me happy :)</h4>{" "}
										<a
											href="/shop"
											class="btn btn-outline-secondary cart-btn-transform m-3"
											data-abc="true"
										>
											continue shopping
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);

	return (
		<div className="cart-wrapper">
			<NavBar />
			<div className="cart-title-wrapper">
				<h1>Your Bag</h1>
				<Link to="/shop">Continue Shopping</Link>
			</div>
			{cart.map((product) => (
				<div className="cart-details-wrapper" key={product._id}>
					<div className="cart-details-container">
						<div className="product-container">
							<img
								src={product.images.url}
								alt="Product Detail"
								className="cart-img"
							/>
							<div>	
								<h3>PRODUCT</h3>
								<h2>{product.title}</h2>
								<p>{product.description}</p>
							</div>
						</div>
						<div className="box-detail-delete" onClick={() => removeProduct(product._id)}>
							Remove
						</div>
						<div className="box-detail-product">
							<h3>PRICE</h3>
							<h2>{product.price}</h2>
						</div>
						<div className="box-detail-product">
							<h3>QTY</h3>
							<div>
								<span onClick={() => decrement(product._id)}> - </span>
								{product.quantity}
								<span onClick={() => increment(product._id)}> + </span>
							</div>
						</div>
						<div className="box-detail-product">
							<h3>SUBTOTAL</h3>
							<h2>$ {(product.price * product.quantity).toFixed(2)}</h2>
						</div>
					</div>
				</div>
			))}
			<div className="total-products-wrapper">
				<div className="total-products-container">
					<h3>Total: <span>${total}</span></h3>
					<PaypalButton total={total} tranSuccess={tranSuccess} />
				</div>
			</div>
		</div>
	);
};

export default Cart;
