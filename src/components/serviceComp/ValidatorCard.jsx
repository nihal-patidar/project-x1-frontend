import React from 'react';
import Validator from './Validator';

const ValidatorCard = () => {
    return (
        <div className="flex flex-col gap-2 w-[95%] h-64 bg-white shadow-inner rounded-lg overflow-hidden justify-around my-2 border">
            <Validator></Validator>
            
        </div>
    );
}

export default ValidatorCard;
