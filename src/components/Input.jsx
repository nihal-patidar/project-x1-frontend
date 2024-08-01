import React,{ useId } from "react";

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
        {label && <label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>}
        <input type={type}
        className={`px-3 py-2 rounded-lg ${bgcolor?bgcolor:"bg-white"} text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full focus:ring-2 ring-blue-400 ${className} dis`}
        ref={ref}
        {...props}
        onChange={(e)=>{
            preview(e);
            updateName(e);
            updateEmail(e);
        }}
        onClick={makeEditable}
        />
        {error != "" && <p className="text-red-500">{error}</p>}
        </div>
        </>
    )
})

export default Input;