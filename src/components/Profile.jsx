import Input from "./Input";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
const Profile = () => {
    const { register, handleSubmit } = useForm();
    var { setShowLoading, userData, image, setImage, setUserData, sendImage, setSendImage } = useContext(UserContext);
    var [editable, setEditable] = useState(false);
    var [username, setUsername] = useState(userData?.name);
    var [email, setEmail] = useState(userData?.email);
    useEffect(() => {
        setSendImage(userData.image);
    }, [])

    const onSubmitHandler = async (data) => {
        setShowLoading((prev) => !prev);
        let token = localStorage.getItem("userData");
        console.log(token);
        await axios.post("http://localhost:3000/api/update-profile", {
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
        })

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
            <form onSubmit={handleSubmit(onSubmitHandler)} action="" className="flex flex-col items-center justify-center border p-3 rounded-md shadow-md">
                <div className="top text-center">
                    <h2 className="text-2xl font-bold">Profile</h2>
                    {!editable ?
                        <img src={userData.image} alt="image" className="w-[50px] rounded-full" />
                        :
                        <img src={image} alt="image" className="w-[50px] rounded-full" />
                    }
                </div>
                <div className="buttom flex flex-col items-start mt-3">
                    <Input
                        name="image"
                        type="file"
                        preview={previewImage}
                        disabled={!editable}
                        {...register("image")}></Input>
                    <Input label="Name" placeholder="Name
                "
                        name="name"
                        type="text"
                        disabled={!editable}
                        updateName={updateName}
                        value={username}
                        {...register("name", { required: true })}></Input>

                    <Input label="Email" placeholder="Email"
                        name="email"
                        type="email"
                        disabled={!editable}
                        updateEmail={updateEmail}
                        value={email}
                        {...register("email", { required: true })}></Input>
                    <div className="mt-4 flex">
                        {!editable ?
                            <Input
                                type="button"
                                className="cursor-pointer"
                                bgcolor="bg-blue-500"
                                value="Edit"
                                makeEditable={makeEditable}
                            ></Input>
                            :
                            <Input
                                type="submit"
                                className="cursor-pointer"
                                bgcolor="bg-green-500"
                                value="Update"
                                makeEditable={makeEditable}
                            ></Input>
                        }
                    </div>
                </div>

            </form>
        </>
    )
}

export default Profile;