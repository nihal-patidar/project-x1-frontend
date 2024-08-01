import { createContext, useState } from "react";

const ServiceContext= createContext();

const ServiceContectProvider= (props)=>{

    var [serviceFormData,setServiceFormData]= useState([]);

    var services= {
      serviceFormData,
      setServiceFormData,
    }
    return(
        <ServiceContext.Provider value={services}>
            {props.children}
        </ServiceContext.Provider>
    )
}


export {ServiceContext,ServiceContectProvider};