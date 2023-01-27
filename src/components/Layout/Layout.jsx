// import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
