import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    const query = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
    });

    const fakeData = [
        {
            id: 1,
            image: 'https://via.placeholder.com/50',
            name: 'John Doe',
            email: 'johndoe@example.com',
            position: 'Student',
        },
        {
            id: 1,
            image: 'https://via.placeholder.com/50',
            name: 'John Doe',
            email: 'johndoe@example.com',
            position: 'Student',
        },
        // Add more fake data items here...
    ];

    const { data: users = [], refetch } = query;



    return (
        <div className="border border-red-500">
            {users.length}
            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Serial Number</th>
                        <th className="border p-2">Image</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Position</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map((item) => (
                        <tr key={item.id}>
                            <td className="border-b p-2">{item.id}</td>
                            <td className="border-b p-2">
                                <img src={item.image} alt="Profile" className="w-8 h-8 rounded-full" />
                            </td>
                            <td className="border-b p-2">{item.name}</td>
                            <td className="border-b p-2">{item.email}</td>
                            <td className="border-b p-2">{item.position}</td>
                            <td className="border-b p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
                                    Make Admin
                                </button>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4">
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