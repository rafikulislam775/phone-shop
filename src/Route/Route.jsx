import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default myCreatedRoute;
