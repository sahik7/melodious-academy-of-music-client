import { Navigate, useLocation } from "react-router";
import usePositionVerify from "../hooks/usePositionVerify";
import { useContext } from "react";
import { IdentityContext } from "../provider/IdentityProvider";
import { RotateLoader } from "react-spinners";


const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(IdentityContext);
    const { validPosition, isPositionLoading } = usePositionVerify();
    const location = useLocation();
    console.log(loading, isPositionLoading, validPosition, user)
    if (loading || isPositionLoading) {
        return <div className="w-4 mx-auto mt-80"><RotateLoader color="#ff4564" /></div>;
    }

    if (user && validPosition) {
        if (validPosition === "student") {
            console.log(user, validPosition)
            return children;
        }
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;