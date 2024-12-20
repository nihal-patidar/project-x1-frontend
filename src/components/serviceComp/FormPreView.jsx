
import React, { useContext, useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { dataContext } from "../../context/DataState";
import axios from 'axios';
import api from "../../../axiosConfig";
import {Link} from "react-router-dom";
import {
  Button,
} from 'antd';
import { ServiceContext } from '../../context/ServiceContext';

const FormPreView = ({ service_id}) => {
    const {setIsOpen,setFieldsDatatype} = useContext(dataContext)
    const baseURL = window.location.origin;
    const formUrl = baseURL + `/ticket-generation/${service_id}`
    // const { fields, setFieldsDatatype, Heloo,isOpen } = useContext(dataContext);
    const {currentServiceId , setCurrentServiceId} = useContext(ServiceContext)


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
           <Button onClick={()=>{setCurrentServiceId(service_id); openPopup("serviceForm");}} style={{backgroundColor : "blue", color: "white"}}>Create Form</Button>
        </div>
    )
}



export default FormPreView ;