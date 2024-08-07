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
        <div className='flex w-full h-full'>
            <Sidebar/>
            <div className='w-full h-full'> 
              <Navbar/>
              <Mainbox/>
            </div>
        </div>
    );
}

export default Home;
