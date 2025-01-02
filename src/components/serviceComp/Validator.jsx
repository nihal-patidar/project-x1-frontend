import React from "react";
import PasswordField from "./PasswordView";

const Validator = (props) => {
  const {
    validator_name,
    validator_email,
    mobile_number,
    validator_address,
    aadhar_number,
    gender,
    position,
    salary,
    time_shift,
    service_id,
    password,
    work_time,
    validator_image_url,
  } = props.validator;

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[95%] bg-gradient-to-r from-orange-100 to-teal-100 shadow-lg border border-orange-300 rounded-lg overflow-hidden justify-between p-4 gap-6 my-4">
      {/* Profile Section */}
      <div className="flex w-full lg:w-1/2 justify-around gap-6">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="relative w-36 h-36 mx-auto overflow-hidden rounded-full border-4 border-teal-500 shadow-lg hover:shadow-teal-500/50 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src={validator_image_url}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold mt-3 text-teal-800 text-center">
            {validator_name}
          </h2>
        </div>
        <div className="flex flex-col w-full md:w-1/2 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Email:</span>
            <br />
            <span>{validator_email}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Mobile No:</span>
            <br />
            <span>{mobile_number}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Gender:</span>
            <br />
            <span>{gender}</span>
          </p>
        </div>
      </div>
      {/* Details Section */}
      <div className="flex w-full lg:w-1/2 justify-around gap-6">
        {/* Column 1 */}

        {/* Column 2 */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Address:</span>
            <br />
            <span>{validator_address}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Aadhar No:</span>
            <br />
            <span>{aadhar_number}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Password:</span>
            <br />
            <PasswordField value={password} />
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Time Shift:</span>
            <br />
            <span>{time_shift}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Position:</span>
            <br />
            <span>{position}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-700">Work Time:</span>
            <br />
            <span>{work_time}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Validator;
