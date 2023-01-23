// import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Suspense } from "react";
export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
