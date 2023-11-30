import { useContext } from "react";
import UseAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "./AuthProvider";
import { Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin , isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Spinner color="pink" aria-label="Pink spinner example" />
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default AdminRoute;