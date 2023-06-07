import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "../pages/Login/Login/LoginPage";
import RegisterPage from "../pages/Login/Register/RegisterPage";
import Main from "../structures/Main"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<NotFoundPage/>,
    children:[
      {
        path: "/login",
    element: <LoginPage/>,
      },
      {
        path: "/register",
    element: <RegisterPage/>,
      }
    ]
  },
]);