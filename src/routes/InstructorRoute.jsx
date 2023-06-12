import { Navigate, useLocation } from "react-router";
import usePositionVerify from "../hooks/usePositionVerify";
import { useContext } from "react";
import { IdentityContext } from "../provider/IdentityProvider";
import { RotateLoader } from "react-spinners";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(IdentityContext);
    const { validPosition,isPositionLoading } = usePositionVerify();
    const location = useLocation();

    if (loading || isPositionLoading) {
        return <div className="w-4 mx-auto mt-80"><RotateLoader color="#ff4564" /></div>
    }

    if (user && validPosition) {
    if (validPosition === "instructor") {
            return children;
        }
    }

    
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;