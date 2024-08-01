import React, { useEffect, useContext, useState } from 'react';
import ServiceTabs from './ServiceTabs';
import { ServiceContext } from "../../context/ServiceContext";
import axios from 'axios';
import { dataContext } from "../../context/DataState";
import { UserContext } from '../../context/UserContext';
import { Button, Input, Radio, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import ServiceForm from './ServiceForm';
import { toast } from 'react-toastify';
const ServiceCard = () => {
    const { fields, setFieldsDatatype, isOpen, setIsOpen } = useContext(dataContext);
    let { openTab, setOpenTab } = useContext(UserContext);
    const [fieldName, setField] = useState("")
    const [fieldType, setFieldtype] = useState("")

    const closePopup = (match) => {
        setIsOpen((prev) => {
            return ({ ...prev, [match]: false })
        })
    };

    const openPopup = (match) => {
        console.log(match, "match")
        setIsOpen((prev) => {
            return ({ ...prev, [match]: true })
        })
    };
    const addFormField = (obj) => {
        console.log(obj);
        setFieldsDatatype(prev => {
            return ([...prev, obj])
        })
    }

    const keywords = [{
        fieldName: "Name", fieldDatatype: "text"
    }, { fieldName: "Email", fieldDatatype: "text" }, { fieldName: "Gender", fieldDatatype: "select" }, { fieldName: "MobileNo.", fieldDatatype: "text" }, { fieldName: "Address", fieldDatatype: "text" },]

    let { serviceFormData, setServiceFormData } = useContext(ServiceContext);
    let token = localStorage.getItem("userData");
    useEffect(() => {
        serviceFormHandler();
    }, [])
    const serviceFormHandler = async () => {
        await axios.get("http://localhost:3000/service/getServices", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            console.log("services Data -- ", response.data.services);
            setServiceFormData(response.data.services);
            // console.log(response.data.services);
        }).catch((err) => {
            console.log(err.response.data);
            toast.warning(err.response.data.msg);
        })
    }


    return (
        <div className="flex flex-col gap-2 w-[95%] h-64 bg-white shadow-inner rounded-lg overflow-hidden justify-around my-2 border">

            {serviceFormData &&
                serviceFormData.map((ele, index) => {
                        console.log("elements services",ele);
                    return (
                        <div key={index} className='flex'>
                            <div className={`popup-window absolute top-5 left-5 w-[50%] bg-blue-gray-500 rounded-md ${isOpen["serviceForm"] ? "flex" : "hidden"}`}>
                                <div className='service-form-builder py-4 flex flex-col items-center w-full mt-6   ' >

                                    <div className="flex relative">
                                        <h2 className="text-[#872323] 
                        text-xl font-extrabold mb-6 text-center min-w-80">
                                            Build Your Form here
                                        </h2>
                                        <button className="absolute top-0 right-0" style={{ color: "black", fontWeight: "bolder", border: "none" }} onClick={() => closePopup("serviceForm")}>Close</button>
                                    </div>

                                    <div className="w-[80%] bg-[#3a433d] rounded-2xl mb-8 px-5 py-8">
                                        <div className="flex justify-start flex-wrap">
                                            {keywords.map(((val, indx) => {
                                                return (
                                                    <Button key={indx} onClick={(e) => {
                                                        addFormField(val);
                                                    }}
                                                        type="primary" className="btn-5">{val.fieldName}</Button>
                                                )
                                            }))

                                            }
                                        </div>
                                        <div className="flex justify-around items-center">
                                            <div className="flex flex-col h-14 w-60">
                                                <label className="font-semibold text-[#d4cca3] my-2">Field Label : </label>
                                                <Input type="Select" onChange={(e) => { setField(e.target.value) }} placeholder='Enter Here' />
                                            </div>
                                            <div className="flex flex-col h-14 w-60">
                                                <label className="font-semibold text-[#d4cca3] my-2">Field Type : </label>
                                                <Select onChange={(e) => { setFieldtype(e) }}>
                                                    <Select.Option value="text">Text</Select.Option>
                                                    <Select.Option value="number">Number</Select.Option>
                                                    <Select.Option value="password">Password</Select.Option>
                                                    <Select.Option value="checkbox">Checkbox</Select.Option>
                                                    <Select.Option value="button">Button</Select.Option>
                                                    <Select.Option value="email">Email</Select.Option>
                                                    <Select.Option value="radio">Radio</Select.Option>
                                                </Select>
                                            </div>
                                            <Button onClick={() => {
                                                setFieldsDatatype((prev) => {
                                                    return ([...prev, { fieldName, fieldType }])
                                                })
                                            }} className="relative" style={{ backgroundColor: "#292c28d9", color: "white", fontWeight: "bold" }}>Add</Button>

                                        </div>
                                    </div>
                                    <div className="flex justify-center w-full items-center ">
                                        <ServiceForm fields={fields} formId={ele?._id} />
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-around w-[48%]">
                                <div className="flex flex-col justify-around center my-8">
                                    <img className="h-32 w-32 object-cover bg-slate-200" src="images/swimming.jpg" alt="Profile Photo" />
                                    <h2 className="text-xl font-bold mb-2">{ele.service_name}</h2>
                                </div>
                                <div className="mr-6 mt-6">
                                    <p className="text-gray-600 mb-2 service_fields">
                                        <span className="font-semibold"> Validator Count : </span><br />
                                        <span>{ele.validater_list.length}</span></p>
                                    <p className="text-gray-600 mb-2 service_fields"><span className="font-semibold">Ticket :</span><br /><span>{ele.ticket_price}</span></p>
                                    <p className="text-gray-600 mb-2 service_fields"><span className="font-semibold">Validity:</span><br /><span>{ele.ticket_validity}</span></p>
                                    <p className="text-gray-600 mb-2 service_fields"><span className="font-semibold">Address:</span><br /><span>{ele.service_address}</span></p>
                                </div>
                            </div>
                            <div className="w-[48%]">
                                <ServiceTabs formData={ele.formData} formUrl={ele.service_url} formQr={ele.service_qr} formId={ele._id} service_id={ele._id}></ServiceTabs>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ServiceCard;
