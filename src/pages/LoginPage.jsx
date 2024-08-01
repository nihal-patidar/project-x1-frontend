import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";
import Login from '../components/Login';
const LoginPage = () => {
    var {userData,showLoading}= useContext(UserContext);
    return (
        <>
        <div className="h-screen flex items-center justify-center">
        {(!userData && showLoading) && <Loading/>}
        <Login></Login>
        </div>
        </>
    );
}

export default LoginPage;
