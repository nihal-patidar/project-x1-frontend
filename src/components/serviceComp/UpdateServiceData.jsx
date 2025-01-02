import React, { useContext, useEffect, useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  UserIcon,
} from "@heroicons/react/24/outline";
import ServiceDetails from "./ServiceDetails";
import { useForm } from "react-hook-form";

import { dataContext } from "../../context/DataState";
import { useNavigate } from "react-router-dom";
import { ServiceContext } from "../../context/ServiceContext";
import api from "../../../axiosConfig";

import { toast } from "react-toastify";
// import { UpdateForm } from "./UpdateForm";
import { useLocation } from "react-router-dom";

export function UpdateServiceForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [isLastStep, setIsLastStep] = React.useState(false);
  // const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [initialValues , setInitialValues] = React.useState();
  const location = useLocation();
  const service_id = location.state.service_id || null ;

  // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // let { serviceFormData, setServiceFormData } = useContext(ServiceContext);
  // let token = localStorage.getItem("userData");

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


function UpdateForm({ initialValues, currentServiceFormId }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  //   const [initialValues , setInitialValues] = React.useState();
  const { closePopup } = useContext(dataContext);
  const navigate = useNavigate();
  let { register, handleSubmit, getValues } = useForm({
    defaultValues: initialValues,
  });

  useEffect(() => {
    () => console.log("initial value", initialValues);
  }, []);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  let { serviceFormData, setServices } = useContext(ServiceContext);
  let token = localStorage.getItem("userData");

  const handleDelete = async () => {
    console.log("current service id", currentServiceFormId);

    await api
      .post(`/service/deleteService/${currentServiceFormId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.warning(err.response.data.msg);
      });
    // closePopup("updateServiceForm");
    navigate("/home/services");
    window.location.reload();
  };

  const serviceFormHandler = async (data) => {
    await api
      .put(`/service/updateService/${currentServiceFormId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setServices((prev) => [...prev, response.data.service]);
        toast.success("Updattion successfully done!!");
        navigate("/home/services");
        window.location.reload();

        reset();
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.warning(err.response.data.msg);
      });
  };
  return (
    <form onSubmit={handleSubmit(serviceFormHandler)}>
      <div className="w-full px-24 py-4 flex flex-col gap-4">
        <div className="steps">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)}>
              <UserIcon className="h-5 w-5" />
              <div className="absolute -bottom-[1.5rem] w-max text-center">
                <Typography
                  color={activeStep === 0 ? "blue-gray" : "gray"}
                  className="font-normal"
                >
                  Service Details
                </Typography>
              </div>
            </Step>
            
          </Stepper>
        </div>
        <div className="forms mt-10">
          {activeStep == 0 ? <ServiceDetails register={register} /> : <></>}
        </div>
        
      </div>
      <div className="flex justify-around w-80 mx-auto mt-40">
        <Button
          className="bg-gray-700 "
          onClick={() => {
            navigate("/home/services");
          }}
        >
          Cancel
        </Button>
        <Button className="bg-green-500" type="submit">
          Submit
        </Button>
        <Button className="bg-red-800 " onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </form>
  );
}