import React, { useContext, useEffect, useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import ServiceDetails from "./ServiceDetails";
import ServiceBankForm from "./ServiceBankForm";
import { useForm } from "react-hook-form";
import { ServiceContext } from "../../context/ServiceContext";
import axios from "axios";
import api from "../../../axiosConfig";

import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { dataContext } from "../../context/DataState";
import { UpdateForm } from "./UpdateForm";
import { useLocation } from "react-router-dom";

export function UpdateServiceForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [initialValues , setInitialValues] = React.useState();
  // const { closePopup, currentServiceFormId } = useContext(dataContext);
  const location = useLocation();
  const service_id = location.state.service_id || null ;

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  let { serviceFormData, setServiceFormData } = useContext(ServiceContext);
  let token = localStorage.getItem("userData");

  useEffect( () => {
    if (service_id) {
      api
      .get(
        `/service/getThisService/${service_id}`
      )
      .then((response) => {
        console.log("form data is here :----", response.data.service_data)
        setInitialValues(response.data.service_data);
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.msg);
      });
    }
  }, []);

  return (
    <div className="w-full h-full bg-white">
      {
        initialValues ? <UpdateForm initialValues={initialValues} currentServiceFormId={service_id}></UpdateForm> : <div>Loading...</div>
      }
    </div>
  );
}

