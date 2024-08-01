import React from 'react';

const Button = (
    {
        link="#",
        className="",
        children
    }
) => {
    return (
        <button type='button' 
        className={`px-4 py-2 rounded-md border ${className}`}
        >{children}</button>
    );
}

export default Button;
