import React from 'react';
import Holder from '../../components/Holder';
import useAxiosProtect from '../../hooks/useAxiosProtect';
import { useQuery } from '@tanstack/react-query';

const AllInstructors = () => {
    const { instance } = useAxiosProtect()
    const { data: instructors = [] } = useQuery(["instructors"], async () => {
        const res = await instance("/users?position=instructor");
        console.log(res.data)
        return res.data;
    });
    return (
        <div className="my-32">
            <Holder>
            <h1 className="text-6xl text-center font-bold ">Meet Our High Profile Instructor</h1>
            <div className="grid grid-cols-2 mt-20 gap-14">
                {instructors.map(instructor => 
                        <div className='flex items-center h-[300px] rounded border-black border-4'>
                            <div className=' w-1/2'>
                                <img src={instructor.image} alt="" />
                            </div>
                            <div className='h-full w-full p-6 border-l-4 border-l-black bg-main text-second'>
                                <h2 className='text-3xl font-avail font-bold'>{instructor.name}</h2>
                                <p className='text-2xl font-bold mt-8 border-b-2 border-b-second w-1/3 pb-2'>Contact</p>
                                <p className='text-xl mt-4'>{instructor.email}</p>
                            </div>

                        </div>
                )}
                </div>

            </Holder>
        </div>
    );
};

export default AllInstructors;