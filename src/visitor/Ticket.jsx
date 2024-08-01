import React from 'react';

const Ticket = (props) => {
    console.log("Visitor data format from Ticket", props.data.visitor_data);
    let Element = [];
    const plotTicket = () => {
        Object.keys(props.data.visitor_data).forEach((key, indx) => {
            let value = props.data.visitor_data[key];
            Element.push(
                <div className='flex justify-between'><span className='w-[80px]'>{key}</span> : <span className='w-[120px]'>{value}</span></div>
            )
        })
        return Element;
    }
    return (
        <div className='flex flex-col items-center w-full py-4' >
            <div className='flex flex-col w-[250px]'>

                {plotTicket()}
            </div>
            <div className='flex flex-col w-full items-center mt-20'>
                <div style={{ height: '120px', width: 'auto' }} dangerouslySetInnerHTML={{ __html: props.data.qrcode }} />
                <div className='flex flex-col w-[140px] text-[#5e5c5c] mt-16'>
                    <p >Ticket Service</p>
                    <p>Provided By :</p>
                    <p>** SolutionHeap **</p>
                    <p className='mt-2'>Contact Us : </p>
                    <p>asksolutionheap@gmail.com</p>
                </div>
            </div>

        </div>
    );
}

export default Ticket;
