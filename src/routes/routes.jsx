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
import AddingClass from "../components/Dashboard/Instructor/AddingClass";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../components/Dashboard/Admin/ManageClasses";
import MyClasses from "../components/Dashboard/Instructor/MyClasses";
import SelectedClass from "../components/Dashboard/Student/SelectedClass";
import EnrolledClass from "../components/Dashboard/Student/EnrolledClass";
import StudentRoute from "./StudentRoute";
import Payment from "../components/Dashboard/Student/Payment/Payment";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <AllClasses />,
      },
      {
        path: "/instructors",
        element: <AllInstructors />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  },
  {
    path: "dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "manage-classes",
        element: <AdminRoute><ManageClasses /></AdminRoute>,
      },
      {
        path: "manage-users",
        element: <AdminRoute><ManageUsers /></AdminRoute>,
      },
      {
        path: "adding-class",
        element: <InstructorRoute><AddingClass /></InstructorRoute>,
      },
      {
        path: "my-classes",
        element: <InstructorRoute><MyClasses /></InstructorRoute>,
      },
      {
        path: "selected-class",
        element: <StudentRoute><SelectedClass /></StudentRoute>,
      },
      {
        path: "enrolled-classes",
        element: <StudentRoute><EnrolledClass /></StudentRoute>,
      },
      {
        path: "payment/:id/:price",
        element: <StudentRoute><Payment /></StudentRoute>
      },
    ]
  }
]);