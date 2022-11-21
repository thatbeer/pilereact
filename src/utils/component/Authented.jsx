import { Outlet, Navigate } from "react-router-dom"
import { useEffect } from "react";
import Header from "../../component/header/header";
const PrivateRoute = () => {
    
    const token = localStorage.getItem("accessToken");

    // useEffect(() => {
    //     const token = localStorage.getItem("accessToken");
        
    // }, []);
    
    return (
        token ? <Header/> : <Navigate to="/"/>
    )
};

export default PrivateRoute;