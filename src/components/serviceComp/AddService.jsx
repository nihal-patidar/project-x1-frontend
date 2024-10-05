import React,{useContext} from "react";
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
 
export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [serviceImage, setServiceImage] = React.useState(null);
  const {closePopup} = useContext(dataContext)
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  let {services , setServices}= useContext(ServiceContext);
  let {register,handleSubmit,reset} = useForm();
  let token= localStorage.getItem("userData");
  const serviceFormHandler= async(data)=>{

    console.log("heloo hi", data);
    console.log("result to be submitted yyyyyyyyy",register)
   await api.put("/service/addService",{
    data : data,
    image : serviceImage
   },{
    headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
    }
   }).then((response)=>{
    console.log(response);
    setServices((prev)=>[...prev,response.data.service]);
    toast.success("Add service Sunccefully!");
    closePopup("addServiceForm");
    reset();
   }).catch((err)=>{
     console.log(err.response.data);
     toast.warning(err.response.data.msg);
   })
  }
  return (
    <form onSubmit={handleSubmit(serviceFormHandler)} action="">
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
        <Step onClick={() => setActiveStep(1)}>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="absolute -bottom-[1.5rem] w-max text-center">
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>
      </Stepper>
      </div>
      <div className="forms mt-10">
        {
            activeStep==0? <ServiceDetails register={register} setServiceImage={setServiceImage}/>: <ServiceBankForm register={register}/>
        }
      </div>
      <div className="flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        {
        activeStep==1?
        <Button type="submit" >
          Submit
        </Button>:
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
        }
      </div>
    </div>
    </form>
  );
}

// onClick={()=>{closePopup("addServiceForm")}}