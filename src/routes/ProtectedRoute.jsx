import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { IdentityContext } from "../provider/IdentityProvider";
import { RotateLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(IdentityContext);
  const locationData = useLocation();

  if (isLoading) {
    return <RotateLoader color="#36d7b7" />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: locationData }} replace />;
};

export default ProtectedRoute;
