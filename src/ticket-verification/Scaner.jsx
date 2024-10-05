import React, { useState, useCallback } from 'react';
import QrReader from 'react-qr-scanner';
import { toast } from 'react-toastify';
import verifyGIF from "/animations/icons8-verify.gif";
import axios from 'axios';
import api from "../../axiosConfig";

const Scaner = () => {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("66ac860505f91b63dff8e70c");
  const [isVerified , setIsVerified] = useState();
  const [qrReadDone , setQRReadDone] = useState(false)


  const handleScan = useCallback(async(data) => {
    if (data) {
        // setResult(data.text || JSON.stringify(data));
        if(result){
          setQRReadDone(true);
          api.get(`/ticket-verification/${result}`,{
            headers: {
              validatorId : "66a8fcbde1e41e925dd0ffba"
            },
          }).then((res)=>{
            console.log("res.data.verified :- ",res.data.verified)
            setIsVerified(res.data.verified);
          }).catch((err)=>{
            toast.warning(err.response.data.msg);
          })
        }
    }
  }, []);

  const handleError = useCallback((err) => {
    console.error(err);
  }, []);

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      

      {qrReadDone ? <></> : <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />}
      
      { isVerified ? 
        <img src={verifyGIF} width="100" height="100" alt='Loading...'/>
        :
        <></>

      }
      <p>{result}</p>
    </div>
  );
}

export default Scaner;
