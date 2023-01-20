import { Routes, Route } from "react-router-dom";
// import { useEffect, Suspense } from "react";
// import { useSelector } from "react-redux";
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
import { NoticesFavoritesList } from "./NoticesFavoritesList/NoticesFavoritesList";
import { NoticesOwnerList } from "./NoticesOwnerList/NoticesOwnerList";
import { NoticesCategoriesList } from "./NoticesCategoriesList/NoticesCategoriesList";

// import { Loader } from "../components/Loader/Loader";

export const App = () => {
  return (
    <>
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
            path="notices"
            element={
              <PublicRoute>
                <NoticesPage />
              </PublicRoute>
            }
          >
            <Route
              path="favorites"
              element={
                // <PrivateRoute>
                  <NoticesFavoritesList />
                // </PrivateRoute>
              }
            />
            <Route
              path="owner"
              element={
                // <PrivateRoute>
                  <NoticesOwnerList />
                // </PrivateRoute>
              }
            />
            <Route
              path=":category"
              element={
                <PublicRoute>
                  <NoticesCategoriesList />
                </PublicRoute>
              }
            />
          </Route>
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
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
