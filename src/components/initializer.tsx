import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authApi from "../apis/server/auth.api";
import { getEnvironment } from "../apis/server/environment.api";
import { setEnvironment } from "../redux/slices/environment.slice";
import { initiateFirebase } from "../redux/slices/firebase-service.slice";
import { initiateG2p } from "../redux/slices/g2p-service.slice";
import { initiateTextRazor } from "../redux/slices/textrazor-service.slice";
import { updateUser } from "../redux/slices/user.slice";
import { RootState } from "../redux/stores/store.redux";
import { User } from "../types/common";

const Initializer = () => {
	const dispatch = useDispatch();
	const environment = useSelector((state: RootState) => state.environment);

	const checkAuthentication = async () => {
		try {
			const token = window?.localStorage.getItem("token");
			if (!token) return;

			const user: User = await authApi.checkToken();
			dispatch(updateUser(user));
		} catch (error) {
			dispatch(updateUser(null));
			throw error;
		}
	};

	const setupEnvironment = async () => {
		try {
			const environment = await getEnvironment();
			dispatch(setEnvironment(environment));
		} catch (error) {
			dispatch(updateUser(null));
			throw error;
		}
	};

	const setupServices = () => {
		const firebaseConfig = environment.firebase;
		dispatch(
			initiateFirebase({
				apiKey: firebaseConfig.API_KEY,
				authDomain: firebaseConfig.AUTH_DOMAIN,
				projectId: firebaseConfig.PROJECT_ID,
				storageBucket: firebaseConfig.STORAGE_BUCKET,
				messagingSenderId: firebaseConfig.MESSAGING_SENDER_ID,
				appId: firebaseConfig.APP_ID,
				measurementId: firebaseConfig.MEASUREMENT_ID,
			}),
		);

		const g2pConfig = environment.g2p;
		dispatch(initiateG2p({ baseUrl: g2pConfig.API_ENDPOINT }));

		const textRazorConfig = environment.textRazor;
		dispatch(
			initiateTextRazor({
				endPoint: textRazorConfig.API_ENDPOINT,
				apiKey: textRazorConfig.API_KEY,
			}),
		);
	};

	const initialize = async () => {
		setupServices();
		await checkAuthentication();
	};

	useEffect(() => {
		setupEnvironment();
	}, []);

	useEffect(() => {
		if (environment.isReady) initialize();
	}, [environment]);
	return <div></div>;
};

export default Initializer;