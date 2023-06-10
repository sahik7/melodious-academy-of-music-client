import React from 'react';
import { Fade } from 'react-awesome-reveal';

const PopularInstructors = () => {
    return (
        <>
        <div className="group w-1/2 mx-auto"><Fade delay={1000}><h1 className="text-5xl text-center mt-32 group-hover:text-second rounded group-hover:bg-main py-2 duration-300  text-main font-avail">Popular Instructors</h1></Fade>
        <hr  className="border-2 mt-6 border-second rounded-full  w-4/12 mx-auto"/></div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-32'>
            <div className='border rounded shadow-2xl'>
                <div className='flex items-center justify-between p-2 bg-main text-second'>
                    <div className=''>
                    <h1 className='text-2xl font-avail'>name name name</h1>
                    <p className=''>Drum Instructor</p>
                    </div>
                    <div className='p-4 '>
        <h3 className='font-bold text-lg'>+3y</h3>
                    </div>
                </div>
        <img src="1.png" alt="" />
            </div>
        </div>
        </>
    );
};

export default PopularInstructors;