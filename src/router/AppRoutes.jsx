import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Apartment from "../pages/Apartment";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "apartment", Component: Apartment },
    ],
  },
]);

export default router;
