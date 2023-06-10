import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SingleClass = ({data}) => {
    const { image, className, instructorName, price, availableSeats } = data;
    return (
        <div className="border border-black h-[450px]">
            <div className="h-[200px] border-b-4 border-b-black">
                <img className="object-cover object-center h-full w-full" src={image} alt="" />
                <div>
                </div>
                <div className=" h-[248px] mt-1 p-4">
                    {/* Name Part */}
                    <div className=" text-main space-y-3">
                        <h2 className="text-3xl font-bold font-avail">{className}</h2>
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm p-1 rounded shadow-xl border border-main text-main">{instructorName}</h3>
                            <h3 className="text-xl px-1">${price}</h3>
                        </div>
                        <div className="flex items-center justify-between ">
                        <h4 className="text-sm w-2/3">Available Seats</h4>
                        <div>
                            <p className="text-lg px-2 py-1 font-bold rounded bg-second text-main">{availableSeats}</p>
                        </div>
                        </div>
                    </div>
                    {/* Button part */}
                            <button className="p-4 mt-2 flex items-center border-2 btn-primary"> Select <AiOutlineArrowRight className="ml-2"/></button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;