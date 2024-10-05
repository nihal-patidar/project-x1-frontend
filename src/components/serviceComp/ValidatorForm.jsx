import React, { useState, useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import api from "../../../axiosConfig";

import { dataContext } from "../../context/DataState";
import { toast } from "react-toastify";

import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  TimePicker,
  Upload,
} from "antd";
import { UserContext } from "../../context/UserContext";
import { ServiceContext } from "../../context/ServiceContext";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const ValidatorForm = () => {
  const { closePopup, setAllValidator } = useContext(dataContext);
  const { userData } = useContext(UserContext);
  let { services, setServices } = useContext(ServiceContext);
  const [validatorImage, setValidatorImage] = React.useState(null);

  const [componentDisabled, setComponentDisabled] = useState(false);
  const [validatorData, setValidatorData] = useState({
    validator_name: "",
    validator_email: "",
    password: "",
    mobile_number: "",
    validator_address: "",
    aadhar_number: "",
    gender: "",
    position: "",
    salary: "",
    time_shift: "",
    service_id: "",
    work_time: "",
  });

  const SubmitData = (label, data) => {
    console.log(label, ":", data);
    setValidatorData((prev) => {
      return { ...prev, [label]: data };
    });
  };
  let token = localStorage.getItem("userData");

  const AddValidator = async (service_id) => {
    console.log("heloo hi", validatorData);
    await api
      .put(
        `/validator/addValidator/${service_id}`,
        {
          validatorData: validatorData,
          image: validatorImage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((response) => {
        console.log(response);
        setAllValidator((prev) => [...prev, response.data.validator]);
        toast.success("validator added successfully!");
        reset();
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.warning(err.response.data.msg);
      });
  };

  const previewImage = (e) => {
    let value = e.target.files[0];
    setValidatorImage(value);
}

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          minWidth: 600,
        }}
      >
        <Form.Item
          label="Upload Your Photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          {/* <Upload action="" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload> */}
          <Input
            name="image"
            type="file"
            // preview={previewImage}
            onChange={(e)=>{
              setValidatorImage(e.target.files[0]);
            }}
          ></Input>
        </Form.Item>

        <Form.Item label="Name">
          <Input
            onChange={(e) => {
              SubmitData("validator_name", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            onChange={(e) => {
              SubmitData("validator_email", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            onChange={(e) => {
              SubmitData("password", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Mobile">
          <Input
            onChange={(e) => {
              SubmitData("mobile_number", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Address">
          <Input
            onChange={(e) => {
              SubmitData("validator_address", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="AadhaarNo">
          <Input
            onChange={(e) => {
              SubmitData("aadhar_number", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Radio.Group
            onChange={(e) => {
              SubmitData("gender", e.target.value);
            }}
          >
            <Radio value="Male"> Male </Radio>
            <Radio value="Female"> Female </Radio>
            <Radio value="Other"> Other </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Position">
          <Input
            onChange={(e) => {
              SubmitData("position", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Salary">
          <Input
            onChange={(e) => {
              SubmitData("salary", e.target.value);
            }}
            type="Number"
          />
        </Form.Item>
        <Form.Item label="Shift">
          <Select
            onChange={(e) => {
              SubmitData("time_shift", e);
            }}
          >
            <Select.Option value="Shift-1">Shift-1</Select.Option>
            <Select.Option value="Shift-2">Shift-2</Select.Option>
            <Select.Option value="Shift-3">Shift-3</Select.Option>
            <Select.Option value="Shift-4">Shift-4</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Choose the Service to which You want to Add the validator">
          <Select
            onChange={(e) => {
              SubmitData("service_id", e);
            }}
          >
            {services &&
              services.map((service, index) => {
                return (
                  <Select.Option value={service._id}>
                    {service.service_name}
                  </Select.Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item label="WorkTime">
          <TimePicker
            onChange={(e) => {
              SubmitData("WorkTime", e.d);
            }}
          />
        </Form.Item>

        <Button
          style={{
            backgroundColor: "#292c28d9",
            color: "white",
            fontWeight: "bolder",
          }}
          onClick={() => {
            AddValidator(validatorData.service_id);
            closePopup("addValidatorForm");
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ValidatorForm;
