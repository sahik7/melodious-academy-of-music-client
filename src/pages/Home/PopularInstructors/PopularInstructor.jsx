import React from 'react';

const PopularInstructor = ({instructor}) => {
    const {image,name} = instructor
    return (
        <div className='border rounded shadow-2xl'>
                <div className='flex items-center justify-between p-2 bg-main text-second'>
                    <div className=''>
                    <h1 className='text-2xl font-avail'>{name}</h1>
                    <p className=''>Top Instructor</p>
                    </div>
                    <div className='p-4'>
        <h3 className='font-bold text-lg'>+3y</h3>
                    </div>
                </div>
        <img src={image} alt="" />
            </div>
    );
};

export default PopularInstructor;