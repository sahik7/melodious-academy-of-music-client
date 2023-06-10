import React from 'react';

const ClassItem = ({ classItem }) => {
    const { image, className, instructorName,price,availableSeats } = classItem;
    return (
        <div className="border border-black">
            <div className="h-[100px] border-b-4 border-b-black">
                <img className="object-cover w-1 overflow-hidden" src={image} alt="" />
            <div>
            </div>
                {/* Name Part */}
                <div>
                    <h2>{className}</h2>
                    <div>
                        <h3>{instructorName}</h3>
                        <h3>{price}</h3>
                    </div>
                    <h4>Available asdfsdts</h4> 
                    <div>
                        <p>{availableSeats}</p>
                    </div>
                </div>
                {/* Button part */}
                <div>
                    <div>
                        <h1>Select</h1>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassItem;


// availableSeats
// :
// 10
// className
// :
// "Keyboard Class"
// enrolledStudents
// :
// 145
// image
// :
// "https://i.ibb.co/mTcbgKF/keyboard.jpg"
// instructorEmail
// :
// "andrew@example.com"
// instructorName
// :
// "Andrew Clark"
// price
// :
// 40