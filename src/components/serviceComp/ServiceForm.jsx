import React, { useContext, useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { dataContext } from "../../context/DataState";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import axios from 'axios';
// import api from "../../axiosConfig";
import api from '../../../axiosConfig';

import { toast } from 'react-toastify';
import { ServiceContext } from '../../context/ServiceContext';
const ServiceForm = ({formId}) => {
  const { fields, setFieldsDatatype, Heloo,isOpen , closePopup } = useContext(dataContext);
  let {services,setServices}= useContext(ServiceContext);

  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  Heloo();

  const deleteField = (indx) => {
    const arr = fields.filter((val, index) => {
      if (indx != index) {
        return val;
      }
    })
    setFieldsDatatype(arr);
  }

  const createFormForVisitor= async()=>{
    console.log(formId);
    await api.post(`/service/addForm/${formId}`,{
        formData:fields
    })
     .then((response)=>{
        console.log(response.data.serviceData);
        setServices((prev)=>{
          return(prev.map((ele)=> {
            if(ele._id == response.data.serviceData._id){
              ele= response.data.serviceData;
            }
            return ele;
          }))
        });
        toast.success(response.data.msg);
        closePopup("serviceForm");

       }).catch((err)=>{
         console.log(err);
         toast.warning(err.response);
       })
   }

  return (
    <Form
      color='red'
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        width: "85%",
        padding: 10,
        border: "3px solid #948686",
        borderRadius: "15px",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#ffffff80",
      }}
    >

      <h1 className='text-xl text-[grey] mb-8'>Form Design</h1>
      

      {fields.map((field, indx) => {

        return (
          <Form.Item key={indx} label={field.fieldName} style={{fontWeight : "bolder"}} >
            <div className='flex '>
              <Input type={field.fieldDatatype} placeholder='Enter Here' />
              <CloseCircleOutlined onClick={(e) => { deleteField(indx) }} style={{ marginLeft: "10px", fontSize: "24px", color: "#e85d5d" }} />
            </div>
          </Form.Item>
        )
      })

      }
      <Button  style={{ backgroundColor: "#292c28d9", color: "white", fontWeight: "bolder" }} onClick={() => { console.log("submitted form :", fields)
           createFormForVisitor();
       }}>Submit</Button>
    </Form>
  );
};
export default ServiceForm;