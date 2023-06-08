import React from 'react';

const Holder = ({children}) => {
    return (
        <div className="w-10/12 mx-auto border border-green-500">
            {children}
        </div>
    );
};

export default Holder;