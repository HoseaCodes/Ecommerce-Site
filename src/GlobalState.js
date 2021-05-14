import React, { createContext, useState, useEffect } from "react";
import ProductsAPI from "./API/ProductsAPI";
import ServicesAPI from "./API/ServicesAPI";
import UserAPI from "./API/UserAPI";
import CategoriesAPI from "./API/CategoresAPI";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
	const [token, setToken] = useState(false);

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

	const state = {
		token: [token, setToken],
		productsAPI: ProductsAPI(),
		servicesAPI: ServicesAPI(),
		userAPI: UserAPI(token),
		categoriesAPI: CategoriesAPI(),
	};
	ProductsAPI();
	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
