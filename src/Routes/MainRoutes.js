import React from "react";
import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Contacts from "../components/Contacts/Contacts";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", Element: <HomePage />, id: 1 },
    { link: "/contacts", Element: <Contacts />, id: 2 },
  ];
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
