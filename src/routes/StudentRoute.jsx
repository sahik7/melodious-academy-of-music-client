import { Navigate, useLocation } from "react-router";
import usePositionVerify from "../hooks/usePositionVerify";
import { useContext } from "react";
import { IdentityContext } from "../provider/IdentityProvider";


const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(IdentityContext);
    const { validPosition, isPositionLoading } = usePositionVerify();
    const location = useLocation();
    console.log(loading, isPositionLoading, validPosition, user)
    if (loading || isPositionLoading) {
        return <p>Loading...</p>
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