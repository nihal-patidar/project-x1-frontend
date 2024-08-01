import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainbox = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Mainbox;
