import {
    Outlet
} from "react-router-dom";
import {Navigate} from "react-router";
import { getUser } from "../../utils/func";


const ProtectedRoute = ({element}) => {

    return getUser() ?
        element
    : <Navigate to='/signin'/>
}

export default ProtectedRoute;