import axios from "axios";
import queryString from "query-string";
// const token = window?.localStorage.getItem("token");

const axiosClient = axios.create({
	baseURL: process.env.GATSBY_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		// Authorization: token ? `Bearer ${token}` : "",
	},
	paramsSerializer: {
		encode: (params) => queryString.stringify(params),
	},
});

axiosClient.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

type ServerResponse<T> = {
	message: string;
	success: boolean;
	data?: T;
};

axiosClient.interceptors.response.use(
	function (response) {
		const result = response.data as ServerResponse<any>;

		if (result.success) {
			return result.data;
		}

		return Promise.reject(result.message);
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);

export default axiosClient;