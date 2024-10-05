import Input from "./Input";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import api from "../../axiosConfig";
const Profile = () => {
    const { register, handleSubmit } = useForm();
    var { setShowLoading, userData, image, setImage, setUserData, sendImage, setSendImage } = useContext(UserContext);
    var [editable, setEditable] = useState(false);
    var [username, setUsername] = useState(userData?.name);
    var [email, setEmail] = useState(userData?.email);

    useEffect(() => {
        setSendImage(userData.image);
    }, []);

    const onSubmitHandler = async (data) => {
        setShowLoading((prev) => !prev);
        let token = localStorage.getItem("userData");
        console.log(token);
        await api.post("/api/update-profile", {
            name: username,
            email: email,
            image: sendImage,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        }).then((response) => {
            setShowLoading(false);
            console.log("data", response.data);
            setUserData(response.data.userData);
            setEditable(false);
            toast.success("Profile updated successfully!");
        }).catch((error) => {
            setShowLoading(false);
            console.log("error data", error.response.data);
            toast(error.response.data.msg);
        });
    }

    const previewImage = (e) => {
        let value = e.target.files[0];
        setImage(URL.createObjectURL(value));
        setSendImage(value);
    }

    const makeEditable = () => {
        setEditable(true);
    }

    const updateName = (e) => {
        setUsername(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit(onSubmitHandler)} 
                action="" 
                className="flex flex-col items-center justify-center border h-[500px] w-[900px] p-6 rounded-md shadow-md text-white">
                <div className="top text-center">
                    <h2 className="text-3xl font-bold mb-4">Profile</h2>
                    {!editable ?
                        <img src={userData.image} alt="Profile" className="w-[80px] h-[80px] rounded-full object-cover mb-4 border-2 border-gray-500" />
                        :
                        <img src={image} alt="Profile Preview" className="w-[80px] h-[80px] rounded-full object-cover mb-4 border-2 border-gray-500" />
                    }
                </div>
                <div className="bottom flex flex-col items-start h-1/2 justify-between mt-3 w-full">
                    <Input
                        name="image"
                        type="file"
                        preview={previewImage}
                        disabled={!editable}
                        className="text-white"
                        {...register("image")}></Input>

                    <Input 
                        label="Name" 
                        placeholder="Name" 
                        name="name"
                        type="text" 
                        disabled={!editable}
                        updateName={updateName}
                        value={username}
                        className="bg-gray-700 text-white border-gray-500 w-full mb-4 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        {...register("name", { required: true })}>
                    </Input>

                    <Input 
                        label="Email" 
                        placeholder="Email" 
                        name="email"
                        type="email"
                        disabled={!editable}
                        updateEmail={updateEmail}
                        value={email}
                        className="bg-gray-700 text-white border-gray-500 w-full mb-4 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        {...register("email", { required: true })}>
                    </Input>

                    <div className="mt-4 flex">
                        {!editable ? (
                            <Input
                                type="button"
                                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                                value="Edit"
                                makeEditable={makeEditable}
                            ></Input>
                        ) : (
                            <Input
                                type="submit"
                                className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
                                value="Update"
                                makeEditable={makeEditable}
                            ></Input>
                        )}
                    </div>
                </div>
            </form>
        </>
    );
}

export default Profile;
