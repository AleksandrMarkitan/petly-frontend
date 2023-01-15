import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PublicRoute } from "HOCs/PublicRoute";
import { PrivateRoute } from "HOCs/PrivateRoute";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						path="register"
						element={
							<PublicRoute redirectTo="/" restricted>
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						path="login"
						element={
							<PublicRoute redirectTo="/" restricted>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path="friends"
						element={
							<PublicRoute redirectTo="/" restricted>
								<OurFriendsPage />
							</PublicRoute>
						}
					/>
					<Route
						path="news"
						element={
							<PublicRoute redirectTo="/" restricted>
								<NewsPage />
							</PublicRoute>
						}
					/>
					<Route
						path="user"
						element={
							<PrivateRoute redirectTo="/login">
								<UserPage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
