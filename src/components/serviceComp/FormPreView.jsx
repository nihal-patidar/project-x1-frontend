
import React, { useContext, useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { dataContext } from "../../context/DataState";
import axios from 'axios';
import api from "../../../axiosConfig";
import {Link, useNavigate} from "react-router-dom";
import {
  Button,
} from 'antd';
import { ServiceContext } from '../../context/ServiceContext';

const FormPreView = ({ service_id}) => {
    const {setIsOpen,setFieldsDatatype} = useContext(dataContext)
    const navigate = useNavigate();
    const baseURL = window.location.origin;
    const formUrl = baseURL + `/ticket-generation/${service_id}`
    const {currentServiceId , setCurrentServiceId} = useContext(ServiceContext)


    const openPopup = (match) => {
        setIsOpen((prev)=>{
            return ({...prev , [match] : true})
        })
    };
    return(
        <div className="flex justify-center items-center w-full h-full">
           <Link to={formUrl}><Button style={{backgroundColor : "blue", color: "white"}}>Form Preview</Button></Link>
           <Button onClick={()=>{navigate('/home/create-visitor-form',{state : {service_id : service_id}})}} style={{backgroundColor : "blue", color: "white"}}>Create Form</Button>
        </div>
    )
}



export default FormPreView ;