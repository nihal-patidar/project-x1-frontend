import React, { useContext } from 'react';
import Loading from "../components/Loading";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Input from './Input';

const Login = () => {

    const { register, handleSubmit } = useForm();
    var { setUserData, setShowLoading } = useContext(UserContext);
    var navigate = useNavigate();

    const LonginHandle = async (data) => {
        setShowLoading((prev) => !prev);
        await axios.post("http://localhost:3000/api/login", {
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
            <form onSubmit={handleSubmit(LonginHandle)} className="flex flex-col items-center justify-center border p-3 rounded-md shadow-md">
                <div className="top text-center">
                    <h2 className="text-2xl font-bold">Registration</h2>
                    <p>If you have account please login <Link to="/register" className=" text-blue-500">Register</Link></p>
                </div>
                <div className="buttom flex flex-col items-start mt-3">


                    <Input label="Email" name="email" type="email" placeholder="Email"
                        {...register("email", { required: true })}
                    ></Input>
                    <Input label="Password" placeholder="Password
                "
                        name="password"
                        type="password"
                        {...register("password", { required: true })}>

                    </Input>

                    <div className="buttons flex items-center justify-between w-full mt-4">
                        <Input
                            type="reset"
                            bgcolor="bg-red-500"
                            className="cursor-pointer"
                            value="Reset"
                        ></Input>

                        <Input
                            type="submit"
                            className="cursor-pointer"
                            bgcolor="bg-green-500"
                            value="Submit"
                        ></Input>
                    </div>
                </div>
                <Link to="/forget-password"><p>Forget Password</p></Link>

            </form>
        </>
    );
}

const LoginPage2 = () => {
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

export default LoginPage2;