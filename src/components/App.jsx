import { Routes, Route } from "react-router-dom";
// import { useEffect, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { PublicRoute } from "../HOCs/PublicRoute";
import { PrivateRoute } from "../HOCs/PrivateRoute";

import { Layout } from "./Layout/Layout";
import { NewsPage } from "../pages/NewsPage/NewsPage";

// import Layout from "./Layout/Layout";

import { UserPage } from "../pages/UserPage/UserPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route
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
          /> */}
          
          <Route
            path="news"
            element={
              <PublicRoute>
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

          {/* 
          <Route
            path="notices/:categoryName"
            element={
              <PrivateRoute redirectTo="/login">
                <NoticesPage />
              </PrivateRoute>
            }
          /> */}

        </Route>
      </Routes>
    </>
  );
};
