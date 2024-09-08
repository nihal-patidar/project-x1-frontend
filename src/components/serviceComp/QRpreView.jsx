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
            <div className="flex flex-col items-center w-full">
            {formQr ? (<>

            <div style={{ height: '150px', width: 'auto' }} dangerouslySetInnerHTML={{ __html: formQr }} />
            <Button onClick={()=>openPopup("qrPreView")} style={{ backgroundColor: "blue", color: "white" }}>Download QR</Button>
            </>
            ) : (
            <p>Loading SVG...</p>
             )}
            </div>
         </div>
    )
}

export default QRpreView;