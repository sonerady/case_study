import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const RouteData = ({ setIsVisible }) => {
  const routes = useRoutes([
    { path: "/", element: <Home setIsVisible={setIsVisible} /> },
    {
      path: "/campaign/:SeoName/:id",
      element: <Detail setIsVisible={setIsVisible} />,
    },
  ]);
  return routes;
};

export default RouteData;
