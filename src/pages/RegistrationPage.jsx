import { useContext } from "react";
import Registration from "../components/Registration";
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";

const RegistrationPage= ()=>{
    var{userData,showLoading}= useContext(UserContext);
    return(
        <>
        <div className="h-screen flex items-center justify-center">
        {(!userData && showLoading) && <Loading/>}
        <Registration></Registration>
        </div>
        </>
    )
}

export default RegistrationPage;