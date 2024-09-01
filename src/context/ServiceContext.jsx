import { createContext, useState } from "react";

const ServiceContext= createContext();

const ServiceContectProvider= (props)=>{

    var [services,setServices]= useState([]);

    var service= {
      services,
      setServices,
    }
    return(
        <ServiceContext.Provider value={service}>
            {props.children}
        </ServiceContext.Provider>
    )
}


export {ServiceContext,ServiceContectProvider};