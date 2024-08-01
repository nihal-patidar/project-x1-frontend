import React, { useContext } from 'react';
import {Button} from "@material-tailwind/react"
import { ServiceContext } from '../context/ServiceContext';
import { UserContext } from '../context/UserContext';
const ServicesPage = () => {
    const{setOpenTab}= useContext(UserContext);
    return (
        <div>
            <div className="top">
                <Button variant="gradient" onClick={()=> setOpenTab(true)}>Add Service</Button>
            </div>
            <div className="buttom"></div>
        </div>
    );
}

export default ServicesPage;
