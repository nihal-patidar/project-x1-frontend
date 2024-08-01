import React, { useContext, useState } from "react";
import { Button } from "antd";
import { dataContext } from "../../context/DataState";

const QRpreView = ({formQr}) => {
    const {setIsOpen} = useContext(dataContext)
    const openPopup = (match) => {
        setIsOpen((prev)=>{
            return ({...prev , [match] : true})
        })
    };

    return (
        <div className="flex justify-center items-center w-full h-full flex-col">
            <Button onClick={()=>openPopup("qrPreView")} style={{ backgroundColor: "blue", color: "white" }}>Download QR</Button>
            <div>
            {formQr ? (
            <div style={{ height: '50px', width: 'auto' }} dangerouslySetInnerHTML={{ __html: formQr }} />
            ) : (
            <p>Loading SVG...</p>
             )}
            </div>
         </div>
    )
}

export default QRpreView;