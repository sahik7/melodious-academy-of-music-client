import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "../pages/Login/Login/LoginPage";
import RegisterPage from "../pages/Login/Register/RegisterPage";
import Main from "../structures/Main"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Home from "../pages/Home/Home";
import Dashboard from "../structures/Dashboard";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<NotFoundPage/>,
    children:[
      {
        path: "/",
    element: <Home/>,
      },
      {
        path: "/classes",
    element: <AllClasses/>,
      },
      {
        path: "/instructors",
    element: <AllInstructors/>,
      },
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
  {
    path: "dashboard",
    element: <ProtectedRoute><Dashboard/></ProtectedRoute>,
    errorElement:<NotFoundPage/>,
    children:[
      {
        path: "manage-classes",
    element: <p>hello this is classes</p>,
      },
      {
        path: "manage-users",
    element: <AdminRoute><ManageUsers/></AdminRoute>,
      }
    ]
  }
]);