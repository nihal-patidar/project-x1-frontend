import React, { useContext, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Mainbox from '../components/Mainbox';
import { BiExit } from 'react-icons/bi';
import {StepperWithContent} from "../components/serviceComp/AddService"
import { ServiceContectProvider } from '../context/ServiceContext';
import { UserContext } from '../context/UserContext';
import { DataState } from '../context/DataState';

const Home = () => {
    
    var {openTab,setOpenTab}= useContext(UserContext);
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='w-full h-screen'> 
              <Navbar/>
              <Mainbox/>
            </div>

           {/* <div className={`container ${openTab?"block":"hidden"} absolute top-0 left-0 w-full h-screen px-[10rem] py-[1rem]`}>
            <div className="popup w-full bg-gray-50 border shadow-md rounded-md max-h-[100vh] relative">
                <div onClick={()=>setOpenTab(false)} className="icon absolute top-0 right-0 p-3 rounded-full bg-gray-300 cursor-pointer"><BiExit/></div>
                <div className="content">
                    <StepperWithContent/>
                </div>
            </div>
            </div> */}
        </div>
    );
}

export default Home;
