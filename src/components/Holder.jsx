import React from 'react';

const Holder = ({children}) => {
    return (
        <div className="w-10/12 mx-auto">
            {children}
        </div>
    );
};

export default Holder;