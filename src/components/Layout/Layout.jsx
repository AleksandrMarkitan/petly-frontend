import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
