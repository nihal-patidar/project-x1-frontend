import React, { memo, useContext, useEffect, useState } from "react";
import Validator_Strip from "./Validator_Strip";
import { dataContext } from "../../context/DataState";
import axios from "axios";
import api from "../../../axiosConfig";



const ValidatorInService = (props) => {
    const {allValidators, setAllValidator } = useContext(dataContext);
    const [validators , setValidator] = useState({});

    useEffect(()=>{
        console.log(props.service_id);
        getValidator();
    },[])

    const getValidator= () => {
        api.get(`/validator/getValidators/${props.service_id}`).then((response)=>{
            let data = response.data.validators ;
            setValidator(data)
            Object.values(data).forEach((value)=>{
                setAllValidator((prev)=>{
                    return ([...prev , value]);
                })
            })
        }).catch((err)=>{
            console.log("error",err);
        })
    }

    console.log("validators element", validators);
    
    let Element = [] ;
    const validatorList = ()=>{
        Object.keys(validators).forEach((key,indx)=>{
            let validator = validators[key];
            // console.log("validator and its key :-",validator , " -> " , key)
            Element.push(
                <Validator_Strip key={indx} validator={{...validator}}/>
            )
        })
        return Element ;
    }
    return(
        <div className="flex flex-col items-center w-full">{validatorList()}</div>
    )
}

export default memo(ValidatorInService) ;