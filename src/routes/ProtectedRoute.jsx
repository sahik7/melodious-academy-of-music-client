import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { IdentityContext } from "../provider/IdentityProvider";
import { RotateLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(IdentityContext);
  const locationData = useLocation();
  console.log({ user, loading })
  if (loading) {
    return <div className="w-4 mx-auto mt-80"><RotateLoader color="#ff4564" /></div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: locationData }} replace />;
};

export default ProtectedRoute;
