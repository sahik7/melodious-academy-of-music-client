import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const ManageUsers = () => {
    const [isAdminButtonDisabled, setAdminButtonDisabled] = useState(false);
    const [isInstructorButtonDisabled, setInstructorButtonDisabled] = useState(false);
    const query = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
    });
    const handleAdminButtonDisabled = () => {
        console.log("Button disabled");
        setAdminButtonDisabled(true);
    };
    const handleInstructorButtonDisabled = () => {
        console.log("Button disabled");
        setInstructorButtonDisabled(true);
    };

    const fakeData = [
        {
            id: 1,
            image: 'https://via.placeholder.com/50',
            name: 'John Doe',
            email: 'johndoe@example.com',
            position: 'Student',
        },
    ];

    const { data: users = [], refetch } = query;



    return (
        <div className=" w-9/12">
            <table className="border-collapse w-full mt-28">
                <thead className="">
                    <tr className="bg-second/50 text-left ">
                        <th className="table-head rounded-tl-md ">No</th>
                        <th className="table-head">Image</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Email</th>
                        <th className="table-head">Position</th>
                        <th className="table-head">Make Admin</th>
                        <th className="table-head rounded-tr-md ">Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map((item, index) => (
                        <tr key={index}>
                            <td className="table-data">{index + 1}</td>
                            <td className="table-data">
                                <img src={item?.image} alt="Profile" className="w-8 h-8 rounded-full" />
                            </td>
                            <td className="table-data">{item?.name}</td>
                            <td className="table-data">{item?.email}</td>
                            <td className="table-data">{item?.position}</td>
                            <td className="table-data">
                                <button
                                    className={`bg-third/20  border-2 rounded border-third  font-bold text-sm py-1 px-3 mr-2 ${isAdminButtonDisabled ? 'opacity-50 hover:scale-100 text-second hover:bg-third bg-third' : 'text-third hover:bg-third hover:text-second hover:scale-95 duration-100'
                                        }`}
                                    disabled={isAdminButtonDisabled}
                                    onClick={handleAdminButtonDisabled}
                                >
                                    Make Admin
                                </button>
                            </td>
                            <td className="border-b pr-4 py-4">
                            <button
                                    className={`bg-main/20  border-2 rounded border-main  font-bold text-sm py-1 px-3 mr-2 ${isInstructorButtonDisabled ? 'opacity-50 hover:scale-100 text-second hover:bg-main bg-red-500' : 'text-main hover:bg-main hover:text-second hover:scale-95 duration-100'
                                        }`}
                                    disabled={isInstructorButtonDisabled}
                                    onClick={handleInstructorButtonDisabled}
                                >
                                    Make Instructor
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;