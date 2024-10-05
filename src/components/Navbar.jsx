import React, { useContext } from "react";
import { BiExit, BiUser, BiIdCard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let { userData } = useContext(UserContext);

  //logout
  let navigate = useNavigate();
  const logout = () => {
    console.log("logout run");
    localStorage.removeItem("userData");
    navigate("/");
  };
  return (
    <div className="nav px-8 pl-64 py-5 flex items-center justify-around bg-slate-100 h-[5rem] w-full">
      
      {/* <Link to="/home/profile">
          <div className="flex items-center gap-2 cursor-pointer px-2 py-2 rounded-full bg-slate-200">
            <p>{userData?.name}</p>
            <BiUser />
          </div>
        </Link>
        <Button
          ripple={true}
          variant="text"
          fullWidth={true}
          className="flex items-center gap-3 text-white"
          onClick={logout}
        >
          LogOut <BiExit />
        </Button>
      {/* <div className="flex items-center justify-between w-[30%]">
      </div> */}
      {/* "{}{}{}[[[][[[][][[[[{{{{}][[{]][[[[]{[[[[]][[[[}][[[]]]]]]]]}]]]}]]}}}]]]]]]]]" */}
    </div>
  );
};

export default Navbar;

{/*
  import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Form = ({ formId, setVisitorData }) => {

    let { register, handleSubmit, watch } = useForm();
    console.log("FormId:", formId);
    let [persionCount, setPersionCount] = useState(1);
    let [validatorList, setValidatorList] = useState();

    var [serviceData, setServiceData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/service/getFormData/${formId}`)
            .then((response) => {
                console.log(response.data.serviceData);
                setServiceData(response.data.serviceData)
            }).catch((err) => {
                console.log(err.response.data);
                toast.warning(err.response.data.msg);
            })

        axios.get(`http://localhost:3000/service/getThisService/${formId}`).then((res) => {
            console.log("validator_list of this service", res.data.validater_list);
            setValidatorList(res.data.validater_list);
            if (!res) {
                toast.warning("ticket is not generated refresh");
            }
        }).catch((err) => {
            console.log(err.response.data);
            toast.warning(err.response.data.msg);
        })

    }, [])

    const submitVisitorFormData = async (data) => {
        console.log("submitVisitorFormData Called !!! ");
        await axios.post(`http://localhost:3000/visitor/set-visitor/${formId}`, {
            visitorData: { visitor_data: data, validater_list: validatorList }
        })
            .then((response) => {
                console.log("visitors data : ", response.data);
                setVisitorData({...response.data.visitorData,qrData:response.data.qrData});

                toast.success("Visitor Data Succefully Added !!!");
            }).catch((err) => {
                console.log(err);
                toast.warning(err.response);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitVisitorFormData)} action="" className="flex w-1/3 bg-gray-300 flex-col items-center justify-center border p-8 rounded-md shadow-md">
                <div className="top text-center w-full bg-blue-700 rounded-md p-3">
                    <h2 className="text-2xl font-bold">{serviceData && serviceData.service_name}</h2>
                    <p className='font-bold text-[#cfcfc0]'><span className='font-semibold '>By :</span> SolutionHeap</p>
                </div>
                <div className="buttom flex flex-col items-start mt-3 gap-3 w-full">

                    {serviceData &&
                        serviceData.form_structure.map((ele, index) => {
                            return (
                                <Input key={index} label={ele.fieldName} type={ele.fieldDatatype} placeholder={ele.fieldName}
                                    {...register(ele.fieldName, { required: true })}
                                ></Input>
                            )
                        })
                    }
                    {
                        serviceData &&
                        <>
                            <p>1 persion ticket price: {serviceData.ticket_price}</p><br />
                            <input label="Enter number of persons" className='px-3 py-2 rounded-lg text-black bg-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full focus:ring-2 ring-blue-400' type="number" value={persionCount} onChange={(e) => setPersionCount(e.target.value)} min="1" />
                            <p>Totle Price of {persionCount} persions is: {persionCount * serviceData.ticket_price}</p>
                        </>
                    }
                    <div className="buttons flex items-center justify-between w-full mt-4">
                        <Input
                            type="reset"
                            bgcolor="bg-red-500"
                            className="cursor-pointer"
                            value="Reset"
                        ></Input>

                        <Input
                            type="submit"
                            className="cursor-pointer"
                            bgcolor="bg-green-500"
                            value="Submit"
                        ></Input>
                    </div>
                </div>

            </form>
        </>
    );
}

export default Form;

  */}