import React from 'react';
import {BiIdCard} from "react-icons/bi";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='h-screen px-2 py-4 bg-slate-100 w-[200px]'>
            <div className='tabs flex flex-col items-start gap-2'>
                <h2 className='font-bold text-xl'>Features</h2>
                <Link to="/home/services">
                <div className="tab flex items-center gap-2 cursor-pointer px-2 py-2 rounded-full bg-slate-200 w-full">
                    <BiIdCard/>
                    <p>Services</p>
                </div>
                </Link>
                <Link to='/home/validators'>

                <div className="tab flex items-center gap-2 cursor-pointer px-2 py-2 rounded-full bg-slate-200 w-full">
                    <BiIdCard/>
                    <p>Validators</p>
                </div>
                </Link>

            </div>
        </div>
    );
}

export default Sidebar;
