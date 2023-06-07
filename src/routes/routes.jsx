import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "../pages/Login/Login/LoginPage";
import RegisterPage from "../pages/Login/Register/RegisterPage";
import Main from "../structures/Main"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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