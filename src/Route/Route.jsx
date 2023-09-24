import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phoneDetails/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch("/public/phones.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
