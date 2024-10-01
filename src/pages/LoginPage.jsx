import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";
import FormFrame from '../components/FormFrame';
const LoginPage = () => {
    var {userData,showLoading}= useContext(UserContext);
    return (
        <>
        <div className="frame h-screen flex items-center justify-center">
        {(!userData && showLoading) && <Loading/>}
          <FormFrame/>
        </div>
        </>
    );
}

export default LoginPage;
