import React, { Component, useEffect, useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Coaching from "./Pages/Coaching/Coaching";
import BlogPage from "./Pages/Blog/Blog";
import SpecificBlogPage from "./Pages/Blog/SpecificBlog";
import Admin from "./Pages/Admin/Admin";
import Login from "./Components/MainShopPages/Auth/Login";
import Cart from "./Components/MainShopPages/Cart/Cart";
import AddBlog from "./Pages/Admin/AddBlog/AddBlog";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Splash from "./Pages/Splash/Slpash";
import Error from "./Pages/Error/Error";
import Particles from "./Components/Particles/Particles";
import Products from "./Components/MainShopPages/Products/Products";
import Register from "./Components/MainShopPages/Auth/Register";
import OrderHistory from "./Components/MainShopPages/History/orderHistory";
import OrderDetails from "./Components/MainShopPages/History/orderDetails";
import DetailProduct from "./Components/MainShopPages/DetailProduct/DetailProduct";
import Category from "./Components/MainShopPages/Categories/categories";
import Create from "./Components/MainShopPages/CreateProduct/createProduct";
import NotFound from "./Components/MainShopPages/Utils/NotFound/NotFound";
import { DataProvider } from "./GlobalState";
import UserAPI from "./API/UserAPI";
import axios from "axios";

const styles = {
	root: {
		fontFamily: "sans-serif",
		textAlign: "center",
		height: "100%",
		background: "#222",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		transition: "0.5s",
	},
};

// On page load loading feature
const Loader = () => (
	<div className="divLoader" style={styles.root}>
		<Particles />
	</div>
);

const App = () => {
	const [token, setToken] = useState(false);
	const [user, setUser] = useState(null);
	const [authenticated, isAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		demoAsyncCall().then(() => {
			setLoading(false);
		});
	}, [loading]);

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			const refreshToken = async () => {
				const res = await axios.get("/user/refresh_token");
				setToken(res.data.accesstoken);

				setTimeout(() => {
					refreshToken();
				}, 10 * 60 * 1000);
			};

			refreshToken();
		}
	}, []);

	const [isLoggedIn] = UserAPI(token).isLoggedIn;
	const [isAdmin] = UserAPI(token).isAdmin;

	return (
		<>
			{loading ? <Loader /> : 
			
			<BrowserRouter>
				<Switch>
					<DataProvider>
						<Route exact path="/blog" render={() => <BlogPage />} />
						<Route
							exact
							path="/specificBlog/:id"
							render={() => <SpecificBlogPage />}
						/>
						<Route path="/products" exact component={Products} />
						<Route path="/detail/:id" exact component={DetailProduct} />
						<Route
							path="/login"
							exact
							component={isLoggedIn ? NotFound : Login}
						/>
						<Route
							path="/register"
							exact
							component={isLoggedIn ? NotFound : Register}
						/>
						<Route
							path="/category"
							exact
							component={isAdmin ? Category : NotFound}
						/>
						<Route
							path="/create_product"
							exact
							component={isAdmin ? Create : NotFound}
						/>
						<Route
							path="/edit_product"
							exact
							component={isAdmin ? Create : NotFound}
						/>
						<Route
							path="/history"
							exact
							component={isLoggedIn ? OrderHistory : NotFound}
						/>
						<Route
							path="/history/:id"
							exact
							component={isLoggedIn ? OrderDetails : NotFound}
						/>
						<Route path="/cart" exact component={Cart} />
						{/* <Route path="*" exact component={NotFound} /> */}
						<Route exact path="/admin" render={() => <Admin />} />
						<Route exact path="/admin/addBlog" render={() => <AddBlog />} />
						{/* <Error /> */}
						<Route exact path="/" render={() => <Splash />} />
						<Route exact path="/shop" render={() => <Shop />} />
						<Route exact path="/coaching" render={() => <Coaching />} />
						<Route exact path="/admin" render={() => <Admin />} />
						<Route exact path="/about" render={() => <About />} />
						<Route exact path="/contact" render={() => <Contact />} />
						{/* <Error /> */}
					</DataProvider>
				</Switch>
			</BrowserRouter>
			}
			
		</>
	);
};

export default App;

function demoAsyncCall() {
	return new Promise((resolve) => setTimeout(() => resolve(), 5500));
}
