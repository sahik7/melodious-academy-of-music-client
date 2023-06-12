import React from 'react';
import { Link } from 'react-router-dom';

const PopularClass = ({ eachClass }) => {
    const { className, instructorName,price,enrolledStudents,image

    } = eachClass;
    console.log(eachClass)
    return (
        <div className="group-card bg-white rounded-lg shadow-xl flex items-center space-x-4 group border border-main h-64">
            <div className="relative duration-500 group-hover:w-2/3 h-full">
                <img className="w-20  group-hover:w-40 duration-500 h-full object-cover" src={image} alt="Class Image" />
                <div className="absolute top-2 left-2 bg-white/60 backdrop-blur-sm border-2 border-main rounded-md py-px px-2 text-main font-semibold">
                    <span className="text-sm"><span className="hidden group-hover:inline">Students</span> {enrolledStudents}</span>
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-end w-full">
                    <div className="space-y-2 w-full">
                        <h2 className="text-2xl font-avail px-4 font-bold">{className}</h2>
                        <p className="text-gray-600 block px-4 group-hover:hidden">{instructorName
                        }</p>
                        <p className=" text-second pl-4 py-1 text-2xl block group-hover:hidden w-full bg-main rounded-l">${price}</p>
                    </div>
                </div>
                <div className="hidden group-hover:block ml-4">
                    <Link to="/classes" className="inline-block btn-primary px-4 py-2 mt-2">Go to Class</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;