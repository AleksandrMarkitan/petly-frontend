import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
// import { useEffect, Suspense } from "react";
// import { useSelector } from "react-redux";
import { PublicRoute } from "../HOCs/PublicRoute";
import { PrivateRoute } from "../HOCs/PrivateRoute";

import { Layout } from "./Layout/Layout";

// const OurFriendsPage = lazy(() =>
//   import("../pages/OurFriendsPage/OurFriendsPage")
// );
// const UserPage = lazy(() => import("../pages/UserPage/UserPage"));

// const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage"));

import OurFriendsPage from "../pages/UserPage/UserPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import UserPage from "../pages/UserPage/UserPage";
import HomePage from "../pages/HomePage/HomePage";
// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

// import { Loader } from "../components/Loader/Loader";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route
            
            path="register"
            element={
              <PublicRoute  restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute  restricted>
                <LoginPage />
              </PublicRoute>
            }
          /> */}
          <Route
            path="friends"
            element={
              <PublicRoute restricted>
                <OurFriendsPage />
              </PublicRoute>
            }
          />

          <Route
            path="news"
            element={
              <PublicRoute restricted>
                <NewsPage />
              </PublicRoute>
            }
          />

          <Route
            path="user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />

          {/* 
          <Route
            path="notices/:categoryName"
            element={
              <PublicRoute resticred>
                <NoticesPage />
              </PublicRoute>
            }
          /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
