import React from 'react';

const Ticket = (props) => {
    return (
        <div>
            <div>Name: {props.data.name} </div>
            <div>Email: {props.data.email}</div>
            <div>Mobile: {props.data.mobile_number}</div>
            <div style={{ height: '50px', width: 'auto' }} dangerouslySetInnerHTML={{ __html: props.data.qrcode}} />
        </div>
    );
}

export default Ticket;
