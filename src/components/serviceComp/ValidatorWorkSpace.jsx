import React, { useState, useContext } from "react";
import Validator from "./Validator";
import { Button } from "@material-tailwind/react";
import { PlusOutlined } from '@ant-design/icons';
import ValidatorForm from "./ValidatorForm";
import { dataContext } from '../../context/DataState';
import "../../index.css"
import { useNavigate } from "react-router-dom";



const ValidatorWorkSpace = () => {
    const { allValidators, openPopup, closePopup, isOpen } = useContext(dataContext)
    console.log("List of Validator", allValidators);
    const navigate = useNavigate();

    return (<>
        <div className="flex flex-col workspace">
        <div className="btn1">
          <Button
            color="blue"
            size="md"
            // onClick={() => openPopup("addValidatorForm")}
            onClick={()=>{
                navigate('/home/create-validator-form');
            }}
          >
            <PlusOutlined /> Add Validator
          </Button>
        </div>
            <div className="flex flex-col w-full h-full">
                
                <div className="center w-[98%] h-full m-3 overflow-y-auto workspace-contents list-of-validators">
                    {
                        allValidators.length ? allValidators.map((validator, index) => {
                            return (
                                <Validator key={index} validator={{ ...validator }} />
                            )
                        }) : <><h1 className="ml-80 pl-10 mt-64 text-6xl">No Validator Added</h1></>
                    }
                </div>
                
            </div>

            {/*------- Form value ---------- */}

            {isOpen.addValidatorForm ? (<>

                <div className="popup-window bg-white h-[80%] w-[1200px] overflow-y-auto border-2 border-gray-500 absolute top-20 left-44 box-border px-7 list-box">
                    <div className='service-form-builder py-4 flex flex-col items-center w-full mt-12' >
                        <div className="flex justify-between w-full">
                            <h2 className="text-[#872323] 
                                text-xl font-extrabold shadow-lg mb-6 text-center w-[400px]">
                                Validator / Checker / Scanner holder
                            </h2>
                            <button className="relative -top-10 font-bold" style={{ color: "black", fontWeight: "bolder", border: "none" }} onClick={() => closePopup("addValidatorForm")}>Close</button>
                        </div>
                        <div className="flex justify-center w-full items-center pt-56">
                            <ValidatorForm />
                        </div>
                    </div>
                </div>
            </>
            ) : (
                <></>
            )

            }
        </div>
    </>)
}

export default ValidatorWorkSpace; 