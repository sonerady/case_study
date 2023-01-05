import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const RouteData = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/campaign/:SeoName/:id", element: <Detail /> },
  ]);
  return routes;
};

export default RouteData;
