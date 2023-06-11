import React, { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IdentityContext } from '../../provider/IdentityProvider';
import { toast } from 'react-hot-toast';
import usePositionVerify from '../../hooks/usePositionVerify';

const SingleClass = ({ data }) => {
    const { user } = useContext(IdentityContext)
    const { validPosition } = usePositionVerify()
    const { _id, image, className, instructorName, price, availableSeats } = data;
    console.log(_id, user?.email)
    console.log(availableSeats)

    const handleAddToMyClasses = () => {
        if (user) {
            const myClassData = {
                id: _id,
                email: user.email,
                titleName: className,
                image: image,
                price: price,

            }
            fetch(`http://localhost:5000/my-classes/${_id}`, { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(myClassData) }).then(response => response.json()).then(() => {
                toast.success("Successfully Selected")
            })
        }
        else {
            toast.error("Please Login First")
        }
    }



    return (
        <div className={`border border-black h-[450px] ${availableSeats || "red-shadow"}`}>
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
                    <button
                        disabled={
                            validPosition === 'admin' ||
                            validPosition === 'instructor' ||
                            availableSeats === "0"
                        }
                        onClick={handleAddToMyClasses}
                        className={`${validPosition === 'admin' || validPosition === 'instructor' || !availableSeats
                            ? 'bg-main/40 items-center border-2 px-4 py-2 mt-2 rounded flex'
                            : ' px-4 py-2 mt-2 flex items-center border-2 btn-primary'
                            } `}
                    >
                        Select <AiOutlineArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;