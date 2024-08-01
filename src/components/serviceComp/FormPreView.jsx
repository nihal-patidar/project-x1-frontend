
import React, { useContext, useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { dataContext } from "../../context/DataState";
import axios from 'axios';
import {Link} from "react-router-dom";
import {
  Button,
} from 'antd';

const FormPreView = ({formUrl}) => {
    const {setIsOpen,setFieldsDatatype} = useContext(dataContext)
    // const { fields, setFieldsDatatype, Heloo,isOpen } = useContext(dataContext);

    const openPopup = (match) => {
        setIsOpen((prev)=>{
            return ({...prev , [match] : true})
        })
    };

    // const getFormData = async () => {
    //     console.log("getFormData is called");

    //     await axios.get(`http://localhost:3000/service/getFormData/${formId}`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         console.log("services Form Data -- ", response.data);
    //         // setFieldsDatatype(response.data.services);
    //     }).catch((err) => {
    //         console.log(err.response.data);
    //         toast.warning(err.response.data.msg);
    //     })
    // }

    return(
        <div className="flex justify-center items-center w-full h-full">
           <Link to={formUrl}><Button style={{backgroundColor : "blue", color: "white"}}>Form Preview</Button></Link>
           <Button onClick={()=>{ openPopup("serviceForm")}} style={{backgroundColor : "blue", color: "white"}}>Create Form</Button>
        </div>
    )
}



export default FormPreView ;