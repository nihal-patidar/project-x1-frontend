import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Input from './Input';
import {useForm} from "react-hook-form"

const EmailVerification = () => {
    var {sendEmailForVerification} = useContext(UserContext);
    let {register,handleSubmit}= useForm();
    const verificationMail= (data)=>{
          sendEmailForVerification(data.email);
    }
    return (
        <form onSubmit={handleSubmit(verificationMail)} action="">
        <div className='rounded-md shadow-md p-4 bg-slate-200'>
            <div className='top'>
            <h2 className='font-bold text-2xl'>Email Verification</h2>
            <p className='font-sm'>Without email verification you can't use the services</p>
            <Input label="Email" name="email" type="email" placeholder="Email"
            {...register("email",{required:true})}
            ></Input>
            </div>
            <div className="bottom w-full flex justify-end mt-4">
                <button className='button bg-green-400 rounded-full text-green-600 cursor-pointer hover:bg-green-500 px-4 py-2'>Send Verify Mail</button>
            </div>
        </div>
        </form>
    );
}

export default EmailVerification;
