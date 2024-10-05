import React, { useEffect } from 'react';
import Ticket from '../components/serviceComp/Ticket';
import axios from 'axios';
import api from "../../axiosConfig";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const TicketPage = () => {
    const [data, setData] = useState(null);
    const loweruserId= useParams().loweruserId;
    useEffect(async()=>{
        let lowerdata= await api.get("/user/get-user/"+loweruserId);
        if(!lowerdata){
            toast.warning("ticket is not generated refresh");
        }

        setData(lowerdata.lowerdata);
    },[])
    return (
        <div>
            <Ticket data={data}/>
        </div>
    );
}

export default TicketPage;
