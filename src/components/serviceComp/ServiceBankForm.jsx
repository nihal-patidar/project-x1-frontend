import React from 'react';
import Input from '../Input';
import SelectInput from "../SelectInput"
const ServiceBankForm = ({register}) => {

    let options=["SBI INDIA"]
    return (
        <>
            <div className='flex gap-2'>
               <SelectInput
               label="Enter Bank Name"
               {...register("bank_name",{required:true})}
               options={options}
               />

                <Input
                label="Account Holder Name"
                type="text"
                placeholder="Service Address"
                {...register("accrount_holder_name",{required:true})}
                ></Input>

               </div>
               <div className='flex gap-2'>
               
               <Input
                label="IFSC Number"
                type="text"
                placeholder="IFSC Number"
                name="ifsc_number"
                {...register("ifsc_number",{required:true})}
                ></Input>

               <Input
                label="Account Number"
                type="number"
                placeholder="Account Number"
                name="account_number"
                {...register("account_number",{required:true})}
                ></Input>

               </div>
               </>
    );
}

export default ServiceBankForm;
