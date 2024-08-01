import React from 'react';
import Form from '../components/Form';
import { useParams } from 'react-router-dom';
const FormPage = () => {
    let {formId}= useParams();
    return (
        <div className='min-h-screen bg-blue-400 flex items-center justify-center overflow-y-scroll'>
            <Form formId={formId}/>
        </div>
    );
}

export default FormPage;
