import React from 'react';
import { GiSelect } from 'react-icons/gi';

const SingleClass = ({data}) => {
    const { image, className, instructorName, price, availableSeats } = data;
    return (
        <div className="border border-black h-[450px]">
            <div className="h-[200px] border-b-4 border-b-black">
                <img className="object-cover object-center h-full w-full" src={image} alt="" />
                <div>
                </div>
                <div className="grid grid-cols-2 h-[248px] mt-1">
                    {/* Name Part */}
                    <div className="p-2 bg-main text-second space-y-3">
                        <h2 className="text-2xl font-bold font-avail">{className}</h2>
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm p-1 bg-second text-main">{instructorName}</h3>
                            <h3 className="text-xl px-1">${price}</h3>
                        </div>
                        <div className="flex items-center justify-between ">
                        <h4 className="text-sm w-2/3">Seats</h4>
                        <div>
                            <p className="text-lg px-2 py-1 font-bold rounded bg-second text-main">{availableSeats}</p>
                        </div>
                        </div>
                    </div>
                    {/* Button part */}
                    <div className="bg-second flex justify-center items-center">
                        <div className="text-center">
                            <h1 className=" text-xl">Select</h1>
                            <button className="p-4 mt-2 border-2 rounded text-main border-main"> <GiSelect/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;