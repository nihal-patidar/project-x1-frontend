import React, { useState, useContext, useEffect, useCallback } from "react";
import { Button, Input, Radio, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { dataContext } from "../../context/DataState";

import Service from "./ServiceCard";
import { BiExit } from 'react-icons/bi';
import ServiceForm from "./ServiceForm";
import { UserContext } from "../../context/UserContext";
import { StepperWithContent } from "./AddService";
const ServiceWorkSpace = () => {
    const { fields, setFieldsDatatype, isOpen, setIsOpen } = useContext(dataContext);
    let { openTab, setOpenTab } = useContext(UserContext);
    const [fieldName, setField] = useState("")
    const [fieldType, setFieldtype] = useState("")

    const keywords = [{
        fieldName: "Name", fieldDatatype: "text"
    }, { fieldName: "Email", fieldDatatype: "text" }, { fieldName: "Gender", fieldDatatype: "select" }, { fieldName: "MobileNo.", fieldDatatype: "text" }, { fieldName: "Address", fieldDatatype: "text" },]

    const openPopup = (match) => {
        console.log(match, "match")
        setIsOpen((prev) => {
            return ({ ...prev, [match]: true })
        })
    };

    const closePopup = (match) => {
        setIsOpen((prev) => {
            return ({ ...prev, [match]: false })
        })
    };

    const addFormField = (obj) => {
        console.log(obj);
        setFieldsDatatype(prev => {
            return ([...prev, obj])
        })
    }
    
    useEffect(() => {
        console.log("fields");
    }, [])
    return (
        <div className="flex flex-col w-full h-[85vh] shadow-lg workspace">
            <div className="flex flex-col w-full h-full">
                <div className="h-20 flex items-center workspace-window">
                    <Button
                        onClick={() => setOpenTab(true)}
                        type="primary" icon={<PlusOutlined />} size="large" style={{
                            backgroundColor: "blue"
                            , position: "relative", left: "85%", top: "15px"
                        }}>Add Services</Button>
                </div>
                <div className="center w-full h-full m-3 overflow-y-auto workspace-contents scroll-m-0">
                    <Service></Service>
                </div>
            </div>
            {isOpen.formPreView ? (
                <>
                    <div className="popup-window-2 flex flex-col justify-center w-[700px] items-center">
                        <button className="" style={{ color: "white", fontWeight: "bolder", border: "none", zIndex: 5 }} onClick={() => closePopup("formPreView")}>Close</button>
                        <ServiceForm />
                    </div>
                </>
            ) : (
                <></>
            )
            }
            {isOpen.qrPreView ? (
                <>
                    <div className="popup-window-2 flex flex-col justify-center items-center w-[700px] h-[350px]">
                        <button className="" style={{ color: "white", fontWeight: "bolder", border: "none", zIndex: 5 }} onClick={() => closePopup("qrPreView")}>Close</button>
                        <img src="images/service_qr.jpg" width="300px" />
                    </div>
                </>
            ) : (
                <></>
            )
            }

            {openTab ? (
                <>
                    <div className={`container absolute top-0 left-0 w-full h-screen px-[10rem] py-[1rem]`}>
                        <div className="popup w-full bg-gray-50 border shadow-md rounded-md max-h-[100vh] relative">
                            <div onClick={() => setOpenTab(false)} className="icon absolute top-0 right-0 p-3 rounded-full bg-gray-300 cursor-pointer"><BiExit /></div>
                            <div className="content">
                                <StepperWithContent />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )
            }


        </div>
    )
}

export default ServiceWorkSpace;