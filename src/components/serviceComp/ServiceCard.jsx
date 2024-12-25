import React, { useEffect, useContext, useState, Suspense } from "react";
import { memo } from "react";
import ServiceTabs from "./ServiceTabs";
import { ServiceContext } from "../../context/ServiceContext";
import axios from "axios";
import api from "../../../axiosConfig";
import { dataContext } from "../../context/DataState";
import { UserContext } from "../../context/UserContext";
import { Input, Radio, Select } from "antd";
import { Button } from "@material-tailwind/react";
import { PlusOutlined } from "@ant-design/icons";
import { BiCross } from "react-icons/bi";
import ServiceForm from "./ServiceForm";
import { toast } from "react-toastify";
import welvideo from "../../../public/vedios/to-our-Service.mp4"
import "../../index.css";

const Services = () => {
  const { isOpen , closePopup } = useContext(dataContext);
  const { currentServiceId } = useContext(ServiceContext);

  const keywords = [
    {
      fieldName: "Name",
      fieldDatatype: "text",
    },
    { fieldName: "Email", fieldDatatype: "text" },
    { fieldName: "Gender", fieldDatatype: "select" },
    { fieldName: "MobileNo.", fieldDatatype: "text" },
    { fieldName: "Address", fieldDatatype: "text" },
  ];

  let { services, setServices } = useContext(ServiceContext);
  let token = localStorage.getItem("userData");
  useEffect(() => {
    serviceFormHandler();
  }, []);


  useEffect(()=>{
    console.log("Service Component Called!!");
  },[])
  const serviceFormHandler = async () => {
    await api
      .get("/service/getServices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("services Data -- ", response.data.services);
        console.log("services fetched request");
        setServices(response.data.services);
        // console.log(response.data.services);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.warning(err.response.data.msg);
      });
  };

  const VisitorFormCreate = ({ service_id }) => {
    const { fields, setFieldsDatatype } = useContext(dataContext);
    const [fieldName, setField] = useState("");
    const [fieldType, setFieldtype] = useState("");

    const addFormField = (obj) => {
      console.log(obj);
      setFieldsDatatype((prev) => {
        return [...prev, obj];
      });
    };
    return (
      <div
        className={`popup-window bg-white h-[85%] w-[1200px] overflow-y-auto border-2 border-gray-300 absolute top-20 left-44 box-border px-7 list-box`}
      >
        <div className="service-form-builder py-0 flex flex-col h-full justify-start items-center w-full   ">
          <div className="flex justify-between w-full">
            <h2
              className="text-[#872323] 
                                    text-xl font-extrabold shadow-lg text-center w-[400px]"
            >
              Creating Visitors Form
            </h2>
            <p className="text-[#261b55] 
                                    text-xl font-bold shadow-lg text-center ">For custom form design <span className="underline">Contact Us</span></p>

            <button
              className="relative font-bold left-5"
              style={{ color: "black", fontWeight: "bolder", border: "none" }}
              onClick={() => closePopup("serviceForm")}
            >
              Close
            </button>
          </div>

          <div className="flex justify-between items-start w-full h-full py-4 bg-white rounded">
            <div className="w-full flex flex-col h-full ">
              <div className="w-full flex flex-col justify-evenly items-center bg-white rounded-2xl px-5 py-8 h-60">
              <p className="text-[#433d5d] 
                                    text-xl font-bold text-center ">Choose Field </p>
                <div className="flex justify-evenly flex-wrap w-full h-12">
                  {keywords.map((val, indx) => {
                    return (
                      <Button
                        key={indx}
                        onClick={(e) => {
                          addFormField(val);
                        }}
                        color="light-green"
                        variant="outline"
                        size="md"
                        className=""
                      >
                        {val.fieldName}
                      </Button>
                    );
                  })}
                </div>
                <div className="flex justify-around items-center mt-3 w-full h-14">
                  <div className="flex flex-col h-14 w-48">
                    <label className="font-semibold text-[#494947] my-2">
                      Field Label :{" "}
                    </label>
                    <Input
                      type="Select"
                      onChange={(e) => {
                        setField(e.target.value);
                      }}
                      placeholder="Enter Here"
                    />
                  </div>
                  <div className="flex flex-col h-14 w-48">
                    <label className="font-semibold text-[#494947] my-2">
                      Field Type :{" "}
                    </label>
                    <Select
                      onChange={(e) => {
                        setFieldtype(e);
                      }}
                    >
                      <Select.Option value="text">Text</Select.Option>
                      <Select.Option value="number">Number</Select.Option>
                      <Select.Option value="password">Password</Select.Option>
                      <Select.Option value="checkbox">Checkbox</Select.Option>
                      <Select.Option value="button">Button</Select.Option>
                      <Select.Option value="email">Email</Select.Option>
                      <Select.Option value="radio">Radio</Select.Option>
                    </Select>
                  </div>
                  <Button
                  onClick={() => {
                    if(fieldName && fieldType){

                    setFieldsDatatype((prev) => {
                      return [...prev, { fieldName, fieldType }];
                    });
                    }
                  }}
                  className="relative top-7 w-20"
                  variant="outlined"
                  size="sm"
                  color=""
                >
                  + Add
                </Button>
                </div>
                
              </div>

              <div class="bg-white flex-col items-center rounded justify-center h-[240px] overflow-hidden">
                <div class="rounded shadow-md">
                  <video className=" opacity-85" width="550px" autoPlay loop>
                    <source
                      src={welvideo}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full items-center ">
              <ServiceForm fields={fields} formId={service_id} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full bg-white shadow-inner rounded-lg overflow-y-auto justify-start items-center my-2 border list-box">
      {services.length !== 0 ?
        services.map((ele, index) => {
          console.log("service no.", index, " -> ", ele);
          return (
            <div
              key={index}
              className="flex w-[95%] h-64 bg-white shadow-lg border-2 border-orange-200 rounded-lg my-2"
            >
              <div className="flex justify-around w-[48%]">
                <div className="flex flex-col justify-around center my-8">
                  <img
                    className="h-32 w-32 object-cover bg-slate-200"
                    src={ele.service_image_url}
                    alt="Profile Photo"
                    loading="lazy"
                  />
                  <h2 className="text-xl font-bold mb-2">{ele.service_name}</h2>
                </div>
                <div className="mr-6 mt-6">
                  <p className="text-gray-600 mb-2 service_fields">
                    <span className="font-semibold"> Validator Count : </span>
                    <br />
                    <span>{ele.validater_list.length}</span>
                  </p>
                  <p className="text-gray-600 mb-2 service_fields">
                    <span className="font-semibold">Ticket :</span>
                    <br />
                    <span>{ele.ticket_price}</span>
                  </p>
                  <p className="text-gray-600 mb-2 service_fields">
                    <span className="font-semibold">Validity :</span>
                    <br />
                    <span>{ele.ticket_validity}</span>
                  </p>
                  <p className="text-gray-600 mb-2 service_fields">
                    <span className="font-semibold">Address :</span>
                    <br />
                    <span>{ele.service_address}</span>
                  </p>
                </div>
              </div>
              <div className="w-[48%]">
                <ServiceTabs
                  formData={ele.formData}
                  formUrl={ele.service_url}
                  formQr={ele.service_qr}
                  formId={ele._id}
                  service_id={ele._id}
                ></ServiceTabs>
              </div>
              {isOpen.serviceForm ? (
                <VisitorFormCreate service_id={currentServiceId} />
              ) : (
                <></>
              )}
            </div>
          );
        }) : <><h1 className="mt-64 text-6xl">No Services Added</h1></>}
    </div>
  );
};

export default memo(Services);
