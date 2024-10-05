import React, { useRef } from 'react';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Input from './Input';
import { Button } from "@material-tailwind/react";
import { dataContext} from '../context/DataState';
import api from '../../axiosConfig';
const Login = () => {

    const { register, handleSubmit } = useForm();
    var {isOpen , openPopup , closePopup} = useContext(dataContext);
    var { setUserData, setShowLoading } = useContext(UserContext);
    var navigate = useNavigate();

    const LonginHandle = async (data) => {
        console.log("i am logining working");
        setShowLoading((prev) => !prev);
        await api.post("/api/login", {
            email: data.email,
            password: data.password
        }).then((response) => {
            console.log("data", response.data);
            setUserData(response.data);
            localStorage.setItem("userData", response.data.token);
            navigate("/home");
            toast.success("Login Succefully!");
        }).catch((error) => {
            setShowLoading((prev) => !prev);
            console.log("error data", error.response.data);
            toast.warning(error.response.data.msg);
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit(LonginHandle)} className="flex flex-col items-center justify-center p-3 bg-white w-[20rem] border shadow-md gap-3">
                <div className="top text-center">
                    <h2 className="text-2xl font-bold" >Login</h2>
                    <p>If you have account please login <Link to="/register" onClick={()=>{closePopup("registration")}} className=" text-blue-500">Register</Link></p>
                </div>
                <div className="buttom flex flex-col items-start mt-3 gap-3 w-full">


                    <Input label="Email" name="email" type="email" placeholder="Email"
                        {...register("email", { required: true })}
                    ></Input>
                    <Input label="Password" placeholder="Password
                "
                        name="password"
                        type="password"
                        {...register("password", { required: true })}>
                    </Input>

                    <div className="buttons flex items-center justify-between w-full mt-4 gap-2">
                        <Button variant='outlined' type="reset">Reset</Button>
                        
                        <Button variant='gradient' type="submit">Submit</Button>
                    </div>
                </div>
                <Link to="/forget-password"><p>Forget Password</p></Link>

            </form>
        </>
    );
}

export default Login;
