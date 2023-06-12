import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PopularInstructor from './PopularInstructor';
import { useQuery } from '@tanstack/react-query';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const PopularInstructors = () => {
    const {instance} = useAxiosProtect()
    const { data: instructors = [] } = useQuery(["instructors"], async () => {
        const res = await instance("/users?position=instructor&limit=6");
        console.log(res.data)
        return res.data;
    });
    console.log(instructors)
    return (
        <>
        <div className="group w-1/2 mx-auto"><Fade delay={1000}><h1 className="lg:text-5xl text-4xl text-center mt-32 group-hover:text-second rounded group-hover:bg-main py-2 duration-300  text-main font-avail">Popular Instructors</h1></Fade>
        <hr  className="border-2 mt-6 border-second rounded-full  w-4/12 mx-auto"/></div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-12 my-32'>
            {instructors.map(instructor => <PopularInstructor key={instructor._id} instructor={instructor}/>)}
        </div>
        </>
    );
};

export default PopularInstructors;