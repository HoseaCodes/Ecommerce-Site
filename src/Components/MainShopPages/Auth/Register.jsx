import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import Footer from "../../../Components/Footer/Footer";
import Logo from "../../../Images/logo1.png";

import "./Login.css";

const Register = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const registerSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/user/register", { ...user });

			localStorage.setItem("firstLogin", true);

			window.location.href = "/";
		} catch (err) {
			alert(err.response.data.msg);
		}
	};

	const {name, email, password} = user
	return (
		<div id="login-page-container">
			<div className="login-page">
				<Link to="/">
					<img className="brand" src={Logo} alt="brand-name" />
				</Link>
				<form onSubmit={registerSubmit}>
					<h2>Registration</h2>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						required
						id="name"
						placeholder="Your name here"
						value={name}
						onChange={onChangeInput}
					/>
					<label htmlFor="e-mail">E-mail</label>
					<input
						type="email"
						name="email"
						id="e-mail"
						required
						placeholder="Your e-mail address"
						value={email}
						onChange={onChangeInput}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						autoComplete="on"
						placeholder="Enter your password"
						value={password}
						onChange={onChangeInput}
					/>

					<div className="row">
						<button type="submit">Register</button>
						<div>
							Already have an account? <Link to="/login">Log in here!</Link>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Register;
