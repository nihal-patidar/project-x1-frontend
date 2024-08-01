import React, { useContext } from 'react';
import {BiUser} from "react-icons/bi"
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
const Navbar = () => {
    let {userData}= useContext(UserContext);
    return (
        <div className='nav px-8 py-5 flex items-center justify-between bg-slate-100 h-[5rem] w-full'>
            <h2 className='font-bold text-2xl'>E-Validation</h2>
            <Link to="/home/profile">
            <div className='flex items-center gap-2 cursor-pointer px-2 py-2 rounded-full bg-slate-200'>
                <p>{userData?.name}</p>
                <BiUser/>
            </div>
            </Link>
        </div>
    );
}

export default Navbar;
