import React, { useState ,useContext } from "react";
import Validator from "./Validator";
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
// import "../../index2.css"
import ValidatorForm from "./ValidatorForm";
import { dataContext } from '../../context/DataState';



const ValidatorWorkSpace = () => {
    const {allValidators , openPopup , closePopup , isOpen} = useContext(dataContext)
    let Element = [] ;
    const validatorList = ()=>{
        Object.keys(allValidators).forEach((key,indx)=>{
            let validator = allValidators[key];
            Element.push(
                <Validator key={indx} validator={{...validator}}/>
            )
        })
        return Element ;
    }

    return (<>
        <div className="flex flex-col w-[90%] h-full shadow-lg workspace">
            <div className="flex flex-col w-full h-full">
                <div className="h-20 flex items-center workspace-window">
                    <Button
                        onClick={()=>openPopup("addValidatorForm")}
                        type="primary" icon={<PlusOutlined />} size="large" style={{
                            backgroundColor: "blue"
                            , position: "relative", left: "85%", top: "15px"
                        }}>Add Validator</Button>
                </div>
                <div className="center w-[98%] h-full m-3 overflow-y-auto workspace-contents">
                {validatorList()}

                </div>

            </div>

            {/*------- Form value ---------- */}

            {isOpen.addValidatorForm ? (<>

                <div className="popup-window">
                    <div className='service-form-builder py-4 flex flex-col items-center w-[70%] mt-6   ' >
-
                        <div className="flex">
                            <h2 className="text-[#872323] 
                                text-xl font-extrabold mb-6 text-center min-w-80">
                                Add Validator
                            </h2>
                            <button className="relative -top-4 left-[85%] " style={{ color: "black", fontWeight: "bolder", border: "none" }} onClick={()=>closePopup("addValidatorForm")}>Close</button>
                        </div>
                        <div className="flex justify-center w-full items-center ">
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