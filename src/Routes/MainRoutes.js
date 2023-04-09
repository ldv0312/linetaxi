import React from "react";
import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [{ link: "/", Element: <HomePage />, id: 1 }];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.Element} id={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
