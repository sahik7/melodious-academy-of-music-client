import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PopularInstructor from './PopularInstructor';

const PopularInstructors = () => {
    return (
        <>
        <div className="group w-1/2 mx-auto"><Fade delay={1000}><h1 className="text-5xl text-center mt-32 group-hover:text-second rounded group-hover:bg-main py-2 duration-300  text-main font-avail">Popular Instructors</h1></Fade>
        <hr  className="border-2 mt-6 border-second rounded-full  w-4/12 mx-auto"/></div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-12 my-32'>
            <PopularInstructor/>
            <PopularInstructor/>
            <PopularInstructor/>
            <PopularInstructor/>
            <PopularInstructor/>
            <PopularInstructor/>
        </div>
        </>
    );
};

export default PopularInstructors;