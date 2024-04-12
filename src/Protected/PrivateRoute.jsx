import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();
    if(user){
        return <div>
            { children }
        </div>
    }
    else{
        return <Navigate to="/login" state={location?.pathname || '/'}/>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;