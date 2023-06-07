import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "../pages/Login/Login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
]);