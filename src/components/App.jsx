import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PublicRoute } from "../HOCs/PublicRoute";
import { PrivateRoute } from "../HOCs/PrivateRoute";

import HomePage from "../pages/HomePage/HomePage";
import { Layout } from "./Layout/Layout";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { NewsPage } from "../pages/NewsPage/NewsPage";
import { UserPage } from "../pages/UserPage/UserPage";
import { OurFriendsPage } from "../pages/OurFriendsPage/OurFriendsPage";
import { NoticesPage } from "../pages/NoticesPage/NoticesPage";
import { fetchCurrentUser } from "../redux/auth/authOperations";
import { Loader } from "./Loader/Loader";
import {
  selectIsFetchingCurrentUser,
  selectIsLoading,
} from "../redux/auth/authSelectors";

export const App = () => {
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser || isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="news"
          element={
            <PublicRoute>
              <NewsPage />
            </PublicRoute>
          }
        />
        <Route
          path="notices/:route"
          element={
            <PublicRoute>
              <NoticesPage />
            </PublicRoute>
          }
        />

        <Route
          path="friends"
          element={
            <PublicRoute>
              <OurFriendsPage />
            </PublicRoute>
          }
        />
        <Route
          path="user"
          element={
            <PublicRoute>
              <UserPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
