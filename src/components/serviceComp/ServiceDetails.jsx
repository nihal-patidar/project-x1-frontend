import React, { useContext } from "react";
import Input from "../Input";
import SelectInput from "../SelectInput";
const ServiceDetails = ({ register, setServiceImage }) => {
  let options = [
    "immedetly",
    "1 Day",
    "3 Days",
    "10 Days",
    "15 Days",
    "1 Month",
    "3 Months",
    "6 Months",
    "12 Months",
    "Other",
  ];

  const previewImage = (e) => {
    let value = e.target.files[0];
    // setServiceImage(URL.createObjectURL(value));
    setServiceImage(value);
    }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full justify-center items-center">
        <Input
          label="Service Image"
          name="image"
          type="file"
          preview={previewImage}
          {...register("image", { required: true })}
        ></Input>
      </div>
      <div className="flex gap-2">
        <Input
          label="Service Name"
          type="text"
          placeholder="Service Name"
          {...register("service_name", { required: true })}
        ></Input>

        <Input
          label="Service Address"
          type="text"
          placeholder="Service Address"
          {...register("service_address", { required: true })}
        ></Input>
      </div>
      <div className="flex gap-2">
        <Input
          label="Ticket Price"
          type="number"
          min="10"
          placeholder="Ticket Price"
          name="Ticket Price"
          {...register("ticket_price", { required: true })}
        ></Input>
        <SelectInput
          options={options}
          label="Ticket Validity"
          {...register("ticket_validity", { require: true })}
        />
      </div>
      {/* <div className="w-full">
        <label className="inline-block mb-1 pl-1" htmlFor="dis">
          Discription
        </label>
        <textarea
          placeholder="Service Discription"
          {...register("service_discription", { required: true })}
          className={`px-3 py-2 rounded-lg text-black bg-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full focus:ring-2 ring-blue-400 dis h-[10rem]`}
        />
      </div> */}
    </div>
  );
};

export default ServiceDetails;
