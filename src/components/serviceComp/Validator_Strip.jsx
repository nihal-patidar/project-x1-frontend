import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { Link } from "react-router-dom";


const Validator_Strip = (props) => {
    const {
        validator_name, validator_email,
        mobile_number, validator_address,
        aadhar_number, gender, position, salary, time_shift,service_i, work_time, validator_image_url
      } = props.validator;
    return (
        <div className="flex justify-between p-2 items-center w-full bg-emerald-300 rounded-md my-1 border-2 border-gray-400">
            <img class="h-8 w-8 object-cover rounded-full bg-slate-200" src={validator_image_url} alt="Profile Photo" />
            <h4 class="text-sm font-bold mb-2 text-gray-700">{validator_name}</h4>
            <h4 class="text-sm font-bold mb-2 text-gray-700">{mobile_number}</h4>

            <Link to="/user" >
                <Button
                    type="primary" size="small" icon={<UserOutlined />} style={{
                        backgroundColor: "blue"
                    }}>
                    Visitors</Button>
            </Link>
        </div>
    )
}

export default Validator_Strip;