import React, { useContext, useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { dataContext } from "../../context/DataState";
import { Button, Form, Input, Select } from "antd";
import api from "../../../axiosConfig";
import welvideo from "../../../public/vedios/to-our-Service.mp4";

import { toast } from "react-toastify";
import { ServiceContext } from "../../context/ServiceContext";
import { useLocation, useNavigate } from "react-router-dom";
const ServiceForm = ({ formId }) => {
  const { fields, setFieldsDatatype, Heloo } = useContext(dataContext);
  const navigate = useNavigate();

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  Heloo();

  const deleteField = (indx) => {
    const arr = fields.filter((val, index) => {
      if (indx != index) {
        return val;
      }
    });
    setFieldsDatatype(arr);
  };

  const createFormForVisitor = async () => {
    console.log(formId);
    await api
      .post(`/service/addForm/${formId}`, {
        formData: fields,
      })
      .then((response) => {
        console.log(response.data.serviceData);
        // setServices((prev) => {
        //   return prev.map((ele) => {
        //     if (ele._id == response.data.serviceData._id) {
        //       ele = response.data.serviceData;
        //     }
        //     return ele;
        //   });
        // });
        toast.success(response.data.msg);
        navigate("/home/services");
        setFieldsDatatype([]);
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response);
      });
  };

  return (
    <div className="flex flex-col justify-center bg-white overflow-y-scroll w-[700px] items-center">
      <Form
        color="red"
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
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff80",
        }}
      >
        <h1 className="text-xl text-[grey] mb-8">Form Design</h1>

        {fields.map((field, indx) => {
          return (
            <Form.Item
              key={indx}
              label={field.fieldName}
              style={{ fontWeight: "bolder" }}
            >
              <div className="flex ">
                <Input type={field.fieldDatatype} placeholder="Enter Here" />
                <CloseCircleOutlined
                  onClick={(e) => {
                    deleteField(indx);
                  }}
                  style={{
                    marginLeft: "10px",
                    fontSize: "24px",
                    color: "#e85d5d",
                  }}
                />
              </div>
            </Form.Item>
          );
        })}
        <Button
          style={{
            backgroundColor: "#292c28d9",
            color: "white",
            fontWeight: "bolder",
          }}
          onClick={() => {
            console.log("submitted form :", fields);
            createFormForVisitor();
          }}
        >
          Submit
        </Button>
      </Form>{" "}
    </div>
  );
};

const VisitorFormCreate = () => {
  const { fields, setFieldsDatatype } = useContext(dataContext);
  const [fieldName, setField] = useState("");
  const [fieldType, setFieldtype] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const service_id = location.state.service_id || null;

  const keywords = [
    {
      fieldName: "Name",
      fieldDatatype: "text",
    },
    { fieldName: "Email", fieldDatatype: "text" },
    { fieldName: "Gender", fieldDatatype: "select" },
    { fieldName: "MobileNo.", fieldDatatype: "text" },
    { fieldName: "Address", fieldDatatype: "text" },
  ];

  const addFormField = (obj) => {
    console.log(obj);
    setFieldsDatatype((prev) => {
      return [...prev, obj];
    });
  };
  return (
    <div
      className={`bg-white h-full w-full border-2 border-gray-300 box-border px-7 list-box overflow-y-scroll pb-10`}
    >
      <div className="service-form-builder py-0 flex flex-col sm:h-full justify-start items-center w-full   ">
        <div className="flex justify-between w-full">
          <div className="flex flex-col sm:flex-row">
            <h2
              className="text-[#872323] 
                                  text-xl font-extrabold shadow-lg text-center w-fit sm:w-[400px]"
            >
              Creating Visitors Form
            </h2>
            <p
              className="text-[#261b55] 
                                 text-bases sm:text-xl font-bold shadow-lg text-center "
            >
              For custom form design{" "}
              <span className="underline">Contact Us</span>
            </p>
          </div>
          <button
            className="relative font-bold left-5"
            style={{ color: "black", fontWeight: "bolder", border: "none" }}
            onClick={() => {
              navigate("/home/services");
              setFieldsDatatype([]);
            }}
          >
            Close
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start w-full sm:h-full bg-white rounded">
          <div className="w-full flex flex-col h-full ">
            <div className="w-full flex flex-col justify-evenly items-center bg-white rounded-2xl px-5 py-8 h-60">
              <p
                className="text-[#433d5d] 
                                  text-xl font-bold text-center "
              >
                Choose Field{" "}
              </p>
              <div className="flex justify-evenly flex-wrap w-full h-12">
                {keywords.map((val, indx) => {
                  return (
                    <Button
                      key={indx}
                      onClick={(e) => {
                        addFormField(val);
                      }}
                      color="light-green"
                      variant="outline"
                      size="md"
                      className=""
                    >
                      {val.fieldName}
                    </Button>
                  );
                })}
              </div>
              <div className="flex justify-around items-center mt-3 w-full h-14">
                <div className="flex flex-col h-14 w-48">
                  <label className="font-semibold text-[#494947] my-2">
                    Field Label :{" "}
                  </label>
                  <Input
                    type="Select"
                    onChange={(e) => {
                      setField(e.target.value);
                    }}
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col h-14 w-48">
                  <label className="font-semibold text-[#494947] my-2">
                    Field Type :{" "}
                  </label>
                  <Select
                    onChange={(e) => {
                      setFieldtype(e);
                    }}
                  >
                    <Select.Option value="text">Text</Select.Option>
                    <Select.Option value="number">Number</Select.Option>
                    <Select.Option value="password">Password</Select.Option>
                    <Select.Option value="checkbox">Checkbox</Select.Option>
                    <Select.Option value="button">Button</Select.Option>
                    <Select.Option value="email">Email</Select.Option>
                    <Select.Option value="radio">Radio</Select.Option>
                  </Select>
                </div>
                <Button
                  onClick={() => {
                    if (fieldName && fieldType) {
                      setFieldsDatatype((prev) => {
                        return [...prev, { fieldName, fieldType }];
                      });
                    }
                  }}
                  className="relative top-7 w-20"
                  variant="outlined"
                  size="sm"
                  color=""
                >
                  + Add
                </Button>
              </div>
            </div>

            <div class="bg-white hidden sm:block flex-col items-center rounded justify-center sm:mt-20 w-full overflow-hidden">
              <div class="rounded shadow-md">
                <video className=" opacity-85 scale-125" width="900px" autoPlay loop>
                  <source src={welvideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center">
            <ServiceForm fields={fields} formId={service_id} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisitorFormCreate;
