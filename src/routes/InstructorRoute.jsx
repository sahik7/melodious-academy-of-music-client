import { Navigate, useLocation } from "react-router";
import usePositionVerify from "../hooks/usePositionVerify";
import { useContext } from "react";
import { IdentityContext } from "../provider/IdentityProvider";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(IdentityContext);
    const { validPosition,isPositionLoading } = usePositionVerify();
    const location = useLocation();

    if (loading || isPositionLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && validPosition) {
    if (validPosition === "instructor") {
            return children;
        }
    }

    
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;