import React from "react";

const Validator = (props) => {
  console.log("One Validator", props);
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
    work_time,
    validator_image_url,
  } = props.validator;

  return (
    <div class=" flex w-[95%] h-56 bg-white shadow-md items-center border-2 border-orange-200 rounded-lg overflow-hidden justify-around my-2">
      <div className="flex flex-col justify-around center w-52">
        {/* <img
          class="h-32 w-32 object-cover bg-slate-200"
          src={validator_image_url}
          alt="Profile Photo"
        /> */}
        <div className="relative w-32 h-32 mx-auto mb-2 overflow-hidden rounded-full border-4 border-teal-400 shadow-lg hover:shadow-teal-500/50 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img
            src={validator_image_url} // Replace with your actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60" /> */}
        </div>
        {/* Gradient Overlay */}
        <h2 class="text-xl font-bold mb-2">
          <span>{validator_name}</span>
        </h2>
      </div>
      <div class="mr-6">
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Email :</span>
          <br />
          <span>{validator_email}</span>
        </p>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Mobile No:</span>
          <br />
          <span>{mobile_number}</span>
        </p>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Gender : </span>
          <br />
          <span>{gender}</span>
        </p>
      </div>
      <div class="mr-6">
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Address :</span>
          <br />
          <span>{validator_address}</span>
        </p>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Aadhar No :</span>
          <br />
          <span>{aadhar_number}</span>
        </p>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Salary :</span>
          <br />
          <span>{salary}</span>
        </p>
      </div>
      <div>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Time Shift :</span>
          <br />
          <span>{time_shift}</span>
        </p>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Position :</span>
          <br />
          <span>{position}</span>
        </p>
        <p class="text-gray-600 mb-2 service_fields">
          <span class="font-semibold">Work Time:</span>
          <br />
          <span>{work_time}</span>
        </p>
      </div>
    </div>
  );
};

export default Validator;
