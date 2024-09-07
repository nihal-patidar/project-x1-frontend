import React, { useContext } from 'react';
import greenImage from "../assets/images/green.jpg";
import registration from "../assets/images/registration.jpg";
import Login from './Login';
import Registration from "./Registration";
import { dataContext } from '../context/DataState';
import "../index.css"
const FormFrame = () => {
    const {isOpen } = useContext(dataContext);
    return (
        <div className='flex items-center rounded-md h-[100vh] bg-white w-full'>
            <div className='h-full'>
                {isOpen.registration?
                <img src={greenImage} alt="image" className='h-full rounded-r-xl' />
                :
                <img src={registration} alt="image" className='h-full rounded-r-xl' />
                }
            </div>
            <div className="form flex items-center justify-center w-[60%] x1-login-box">
                {isOpen.registration? 
                <Login/> :
                <Registration/>}
            </div>
        </div>
    );
}

export default FormFrame;
