import React, { useEffect, useContext, useState, Suspense } from "react";
import { memo } from "react";
import ServiceTabs from "./ServiceTabs";
import { ServiceContext } from "../../context/ServiceContext";
import api from "../../../axiosConfig";
// import axios from "axios";
// import { dataContext } from "../../context/DataState";
// import { UserContext } from "../../context/UserContext";
// import { Input, Radio, Select } from "antd";
// import { Button } from "@material-tailwind/react";
// import { PlusOutlined } from "@ant-design/icons";
// import { BiCross } from "react-icons/bi";
// import ServiceForm from "./ServiceForm";
// import welvideo from "../../../public/vedios/to-our-Service.mp4";
import { toast } from "react-toastify";
import "../../index.css";

const Services = () => {
  // const { isOpen } = useContext(dataContext);
  // const { currentServiceId } = useContext(ServiceContext);

  let { services, setServices } = useContext(ServiceContext);
  let token = localStorage.getItem("userData");
  useEffect(() => {
    serviceFormHandler();
  }, []);

  useEffect(() => {
    console.log("Service Component Called!!");
  }, []);
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
      {services.length !== 0 ? (
        services.map((ele, index) => {
          console.log("service no.", index, " -> ", ele);

          return <Service ele={ele} index={index} />;
        })
      ) : (
        <>
          <h1 className="mx-auto mt-48 w-fit text-4xl sm:text-6xl">No Services Added</h1>
        </>
      )}
    </div>
  );
};

const Service = ({ ele, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col sm:flex-row w-[95%] sm:h-64 bg-white shadow-lg border-2 border-orange-200 rounded-lg my-2"
    >
      <div className="flex justify-around w-full sm:w-[48%] ">
        <div className="flexflex-col justify-around center my-3 sm:my-8">
          <img
            className="h-24 w-24 sm:w-32 sm:h-32 object-cover bg-slate-200"
            src={ele.service_image_url}
            alt="Profile Photo"
            loading="lazy"
          />
          <h2 className="text-sm sm:text-xl font-bold mb-2">{ele.service_name}</h2>
        </div>
        <div className="mr-6 mt-2 sm:mt-6 text-sm sm:text-lg">
          <p className="text-gray-600 mb-2 service_fields">
            <span className="font-semibold label-x"> Validator Count : </span>
            <span className="value-x">{ele.validater_list.length}</span>
          </p>
          <p className="text-gray-600 mb-2 service_fields">
            <span className="font-semibold label-x">Ticket : </span>
            <span className="value-x">{ele.ticket_price}</span>
          </p>
          <p className="text-gray-600 mb-2 service_fields">
            <span className="font-semibold label-x">Validity : </span>
            <span className="value-x">{ele.ticket_validity}</span>
          </p>
          <p className="text-gray-600 mb-2 service_fields">
            <span className="font-semibold label-x">Address : </span>
            <br />
            <span className="value-x">{ele.service_address}</span>
          </p>
        </div>
      </div>
      <div className="w-full sm:w-[48%]">
        <ServiceTabs
          formData={ele.formData}
          formUrl={ele.service_url}
          formQr={ele.service_qr}
          formId={ele._id}
          service_id={ele._id}
        ></ServiceTabs>
      </div>
    </div>
  );
};

export default memo(Services);
