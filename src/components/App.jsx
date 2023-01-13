import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PublicRoute } from "HOCs/PublicRoute";
import { PrivateRoute } from "HOCs/PrivateRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
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
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
