import React, { useContext, useEffect, useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
    CogIcon,
    UserIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import { useParams } from "react-router-dom";


// import { ServiceContext } from "../../context/ServiceContext"; 
// import Payment from "./Payment"
import Form from "./Form";
import TicketPage from "./TicketPage";

export function VisitorStepForTicket() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    
    const [visitorData, setVisitorData] = useState();
    // const [formId, setFormId] = useState();
    const {formId} = useParams();

    // useEffect(()=>{
    //     setFormId(()=> {const  {formId} = useParams(); return formId});
    // },[])

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    // let { serviceFormData, setServiceFormData } = useContext(ServiceContext);

    let token = localStorage.getItem("userData");

    return (

        <div className="w-full flex flex-col items-center gap-4 mt-3 mb-12">
            {/* <div className="steps w-[300px]">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    
                    <Step onClick={() => setActiveStep(0)}>
                        <BuildingLibraryIcon className="h-5 w-5" />
                        <div className="absolute -bottom-[1.5rem] w-max text-center">
                            <Typography
                                color={activeStep === 0 ? "blue-gray" : "gray"}
                                className="font-normal"
                            >
                                Form
                            </Typography>
                        </div>
                    </Step>
                    <Step onClick={() => setActiveStep(1)}>
                        <BuildingLibraryIcon className="h-5 w-5" />
                        <div className="absolute -bottom-[1.5rem] w-max text-center">
                            <Typography
                                color={activeStep === 2 ? "blue-gray" : "gray"}
                                className="font-normal"
                            >
                                Ticket
                            </Typography>
                        </div>
                    </Step>
                </Stepper>
            </div> */}
            <div className="forms mt-10 w-[400px]">
                {/* {
                    activeStep == 0 ? <></> : null
                } */}
                {
                    activeStep == 0 ? <Form setVisitorData={setVisitorData} setActiveStep={setActiveStep} formId={formId} /> : null
                }
                {/* {
                    activeStep == 1 ? <Payment></Payment> : null
                } */}
                {
                    activeStep == 1 ? <TicketPage data={{visitorData,formId}} /> : null
                }
            </div>
            
        </div>

    );
}

export default VisitorStepForTicket ;

