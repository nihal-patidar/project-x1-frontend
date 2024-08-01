import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ImageInput = ({disabled},ref) => {
    let {image,setImage}= useContext(UserContext);
    const previewImage= (e)=>{
        let value= e.target.files[0];
        console.log(URL.createObjectURL(value));
        setImage(URL.createObjectURL(value));
    }
    return (
        <>
        <img src={image} alt="image" className='w-[50px]'/>
        <input type="file" onChange={previewImage} disabled={disabled} ref={ref}/>
        </>
    );
}

export default React.forwardRef(ImageInput);
