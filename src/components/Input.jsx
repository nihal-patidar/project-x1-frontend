import React,{ useId } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input as InputField,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
const Input = React.forwardRef(({
    label,
    preview=()=>{},
    makeEditable= ()=>{},
    updateName= ()=>{},
    updateEmail= ()=>{},
    className="",
    type="text",
    bgcolor=null,
    error,
    ...props
},ref)=>{
    const id= useId();
    return(
        <>
        <div className="w-full">
        {/* {label && <label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>} */}
        <InputField type={type}
        className={`px-3 py-2 rounded-lg text-black outline-none select-none focus:bg-gray-50 duration-200 border w-full ${className} fill-white`}
        ref={ref}
        label={label}
        {...props}
        
        onChange={(e)=>{
            preview(e);
            updateName(e);
            updateEmail(e);
        }}
        onClick={makeEditable}
        ></InputField>
        {error != "" && <p className="text-red-500">{error}</p>}
        </div>
        </>
    )
})

export default Input;