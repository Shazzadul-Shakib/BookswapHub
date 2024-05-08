import { useContext } from "react";
import { AuthContext } from "../provider/authProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <h1>Loading...</h1>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to='/login'/>
        </div>
    );
};

export default PrivateRoute;