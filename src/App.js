import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './Pages/About/About';
import AddBlog from './Pages/Admin/AddBlog/AddBlog';
import Admin from './Pages/Admin/Admin';
import BlogPage from './Pages/Blog/Blog';
import Cart from "./Components/MainShopPages/Cart/Cart";
import Category from "./Components/MainShopPages/Categories/categories";
import Coaching from './Pages/Coaching/Coaching'
import Contact from './Pages/Contact/Contact';
import Create from "./Components/MainShopPages/CreateProduct/createProduct";
import DetailProduct from "./Components/MainShopPages/DetailProduct/DetailProduct";
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Instagram from './Pages/Instagram/Instagram';
import Login from "./Components/MainShopPages/Auth/Login";
import NotFound from "./Components/MainShopPages/Utils/NotFound/NotFound";
import OrderDetails from "./Components/MainShopPages/History/orderDetails";
import OrderHistory from "./Components/MainShopPages/History/orderHistory";
import Particles from "./Components/Particles/Particles";
import Products from "./Components/MainShopPages/Products/Products";
import Register from "./Components/MainShopPages/Auth/Register";
import Shop from './Pages/Shop/Shop';
import SpecificBlogPage from './Pages/Blog/SpecificBlog';
import Splash from './Pages/Splash/Slpash';
import { DataProvider } from './GlobalState';
import { GlobalState } from './GlobalState';
import './App.css';

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

const Global = React.createContext(GlobalState);

// On page load loading feature
const Loader = () => (
	<div className="divLoader" style={styles.root}>
		<Particles />
	</div>
);

export default class App extends Component {
	state = {
		user: null,
		authenticated: false,
		loading: true,
		// isLoggedIn: global.userAPI.isLoggedIn,
		// isAdmin: global.userAPI.isAdmin
	};

	componentDidMount() {
		// this simulates an async action, after which the component will render the content
		demoAsyncCall().then(() => this.setState({ loading: false }));
	}

	// static contextType = GlobalState;

	render() {
		// const global = this.context;
		// console.log(Global.Provider)
		return (
			<>
				{this.state.loading ? <Loader /> : null}
				<BrowserRouter>
					<Switch>
						<DataProvider>

							<Route exact path="/blog" render={()=>(<BlogPage/>)}/>
							<Route exact path="/specificBlog/:id" render={()=>(<SpecificBlogPage/>)}/>
							<Route path="/products" exact component={Products} />
							<Route path="/detail/:id" exact component={DetailProduct} />
							<Route path="/login" exact component={this.props.isLoggedIn ? NotFound : Login} />
							<Route path="/register" exact component={this.props.isLoggedIn ? NotFound : Register} />
							<Route path="/category" exact component={this.props.isAdmin ? Category : NotFound} />
							<Route path="/create_product" exact component={this.props.isAdmin ? Create : NotFound} />
							<Route path="/edit_product" exact component={this.props.isAdmin ? Create : NotFound} />
							<Route path="/history" exact component={this.props.isLoggedIn ? OrderHistory : NotFound} />
							<Route path="/history/:id" exact component={this.props.isLoggedIn ? OrderDetails : NotFound} />
							<Route path="/cart" exact component={Cart} />
							{/* <Route path="*" exact component={NotFound} /> */}
							<Route
								exact
								path="/admin"
								render={() => (
								<Admin
								/>
								)}
							/>
							<Route
								exact
								path="/admin/addBlog"
								render={() => (
								<AddBlog
								/>
								)}
							/>
							<Route exact path="/" render={() => <Splash />} />
							<Route exact path="/shop" render={() => <Shop />} />
							<Route exact path="/instagram" render={() => <Instagram/>} />
							<Route exact path="/coaching" render={() => <Coaching />} />
							<Route exact path="/admin" render={() => <Admin />} />
							<Route exact path="/about" render={() => <About />} />
							<Route exact path="/contact" render={() => <Contact />} />
							{/* <Error /> */}
						</DataProvider>
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}

function demoAsyncCall() {
	return new Promise((resolve) => setTimeout(() => resolve(), 5500));
}
