import React, { useState, useContext } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import Cart from "./icon/cart.svg";
import Close from "./icon/close.svg";
import Menu from "./icon/menu.svg";
import { GlobalState } from "../../GlobalState";

//Handle sub nav w/Admin
const Header = () => {
	const state = useContext(GlobalState);
	const [isLoggedIn] = state.userAPI.isLoggedIn;
	const [isAdmin] = state.userAPI.isAdmin;
	const [cart] = state.userAPI.cart;
	const [menu, setMenu] = useState(false);

	const logoutUser = async () => {
		await axios.get("/user/logout");
		localStorage.removeItem("firstLogin");
		window.location.href = "/";
	};

	const adminRouter = () => {
		return (
			<>
				<li>
					<Link to="/create_product">Create Product</Link>
				</li>
				<li>
					<Link to="/category">Categories</Link>
				</li>
			</>
		);
	};
	const loggedInRouter = () => {
		return (
			<>
				<li>
					<Link to="/history">History</Link>
				</li>
				<li>
					<Link to="/" onClick={logoutUser}>
						Logout
					</Link>
				</li>
			</>
		);
	};
	const styleMenu = {
		left: menu ? 0 : "-100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		paddingLeft:"0px",
		marginTop: "-10px"
	};

	console.log(isLoggedIn);
	return (
		<>
		<label htmlFor="bar-checker" className='hamburger2'>
			<img src={Menu} alt="Menu" width="30" />
		</label>
		<input type="checkbox" className='checker' id="bar-checker"/>
		<header>
			<section id="sidebar">
				{/* <div class="py-2 border-bottom ml-3">
					<h6 class="font-weight-bold">CATEGORIES</h6>
					<form>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="artisan" />{" "}
							<label htmlFor="artisan">Fresh Artisan Breads</label>{" "}
						</div>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="breakfast" />{" "}
							<label htmlFor="breakfast">Breakfast Breads</label>{" "}
						</div>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="healthy" />{" "}
							<label htmlFor="healthy">Healthy Breads</label>{" "}
						</div>
					</form>
				</div> */}
				{/* <div class="py-2 border-bottom ml-3">
					<h6 class="font-weight-bold">ACCOMPANIMENTS</h6>
					<form>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="tea" />{" "}
							<label htmlFor="tea">Tea Cakes</label>{" "}
						</div>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="cookies" />{" "}
							<label htmlFor="cookies">Cookies</label>{" "}
						</div>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="pastries" />{" "}
							<label htmlFor="pastries">Pastries</label>{" "}
						</div>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="dough" />{" "}
							<label htmlFor="dough">Cookie Dough</label>{" "}
						</div>
						<div class="form-group">
							{" "}
							<input type="checkbox" id="choco" />{" "}
							<label htmlFor="choco">Chocolates</label>{" "}
						</div>
					</form>
				</div> */}
			{isAdmin ? (
				""
			) : (
				<div className="cart-icon">
					<span>{cart.length}</span>
					<Link to="/cart">
						{" "}
						<img src={Cart} alt="Shoppingcart" width="30" />
					</Link>
				</div>
			)}
			<br/> <br/>
			<ul style={styleMenu}>
				{isAdmin && adminRouter()}
				{isLoggedIn ? (
					loggedInRouter()
				) : (
					<li>
						{/* <Link to="/login">Login ✥ Register</Link> */}
					</li>
				)}

				<li className="menu" onClick={() => setMenu(!menu)}>
					<img src={Close} alt="CloseButton" width="30" className="menu" />
				</li>
			</ul>
			</section>
			{/* <div className="menu" onClick={() => setMenu(!menu)}>
				<img src={Menu} alt="Menu" width="30" />
			</div> */}
		</header>
		</>
	);
};

export default Header;
