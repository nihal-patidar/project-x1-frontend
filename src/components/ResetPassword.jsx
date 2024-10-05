import Input from "./Input";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {useForm} from "react-hook-form"
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
const ResetPassword= ()=>{
    const {register,handleSubmit}= useForm();
    var[password,setPassword]=useState(null);
    var[confirmPassword,setConfirmPassword]= useState(null);
    var{setShowLoading}= useContext(UserContext);
    var navigate= useNavigate();
    const onSubmitHandler= async (data)=>{
        setShowLoading((prev)=>!prev);
        let check= true;
        if(data.password.length < 8){
            setPassword("Enter 8 Chareacter password");
            check=true;
        setShowLoading(false);
        }else{
            setPassword(null);
            check=false;
        }
        if(data.password != data.c_password){
            setConfirmPassword("password is not match");
            check=true;
            setShowLoading(false);
        }else{
            check=false;
            setConfirmPassword(null);
        }
    if(!check){
       await api.post("/api/reset-password",{
            password:data.password,
            c_password:data.c_password
        }).then((response)=>{
            setShowLoading(false);
            console.log("data",response.data);
            navigate("/login");
            toast.success("Password Updated!");
        }).catch((error)=>{
            setShowLoading(false);
            console.log("error data",error.response.data);
            toast(error.response.data.msg);
        })
     }
    }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmitHandler)} action="" className="flex flex-col items-center justify-center border p-3 rounded-md shadow-md">
            <div className="top text-center">
                <h2 className="text-2xl font-bold">Reset password</h2>
                <p>If you have account please login <Link to="/login" className=" text-blue-500">Login</Link></p>
            </div>
            <div className="buttom flex flex-col items-start mt-3">
                <Input label="Password" placeholder="Password
                "
                name="password"
                type="password"
                error={password}
                {...register("password",{required:true})}></Input>

                <Input label="Confirm Password" placeholder="Confirm Password"
                name="c_password"
                error={confirmPassword}
                type="password"
                {...register("c_password",{required:true})}></Input>
                <div className="mt-4">
                <Input
                type="submit"
                className="cursor-pointer"
                bgcolor="bg-green-500"
                value="Update Password"
                ></Input>
                </div>
            </div>
            
        </form>
        </>
    )
}

export default ResetPassword;