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

  // const keywords = [
  //   {
  //     fieldName: "Name",
  //     fieldDatatype: "text",
  //   },
  //   { fieldName: "Email", fieldDatatype: "text" },
  //   { fieldName: "Gender", fieldDatatype: "select" },
  //   { fieldName: "MobileNo.", fieldDatatype: "text" },
  //   { fieldName: "Address", fieldDatatype: "text" },
  // ];

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
