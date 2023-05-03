import React from "react";
import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Contacts from "../components/Contacts/Contacts";
import PasajPage from "../Pages/PasajPage";
import UslovPage from "../Pages/UslovPage";
import AddUslovPage from "../Pages/AddUslovePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", Element: <HomePage />, id: 1 },
    { link: "/contacts", Element: <Contacts />, id: 2 },
    { link: "/pasaj", Element: <PasajPage />, id: 3 },
    { link: "/uslov", Element: <UslovPage />, id: 4 },
    { link: "/addUslov", Element: <AddUslovPage />, id: 5 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route
            path={item.link}
            element={item.Element}
            key={item.id}
            id={item.id}
          />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
