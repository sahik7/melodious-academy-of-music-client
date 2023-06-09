import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
      });
    
      const [disabledButtons, setDisabledButtons] = useState([]);
    
      const handleAdminButton = (id, index) => {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "PATCH",
        })
          .then(response => response.json())
          .then(data => {
            if (data.modifiedCount) {
              setDisabledButtons(prevDisabledButtons => {
                const updatedButtons = [...prevDisabledButtons];
                updatedButtons[index] = true;
                return updatedButtons;
              });
              refetch(); // Fetch updated user data
            }
          });
      };
    
      const isAdminButtonDisabled = (index) => {
        return disabledButtons[index];
      };
    // const handleInstructorButtonDisabled = () => {

    //     setInstructorButtonDisabled(true);
    // };






    return (
        <div className=" w-9/12">
            <table className="border-collapse w-full mt-10">
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
                    {users.map((item, index) => (
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
                                    className={`bg-third/20  border-2 rounded border-third  font-bold text-sm py-1 px-3 mr-2 ${isAdminButtonDisabled(
                                        index
                                    ) ? 'opacity-50 hover:scale-100 text-second hover:bg-third bg-third' : 'text-third hover:bg-third hover:text-second hover:scale-95 duration-100'}`}
                                    disabled={isAdminButtonDisabled(index)}
                                    onClick={() => handleAdminButton(item._id, index)}
                                >
                                    Make Admin
                                </button>
                            </td>
                            <td className="border-b pr-4 py-4">
                                {/* <button
                                    className={`bg-main/20  border-2 rounded border-main  font-bold text-sm py-1 px-3 mr-2 ${isInstructorButtonDisabled ? 'opacity-50 hover:scale-100 text-second hover:bg-main bg-red-500' : 'text-main hover:bg-main hover:text-second hover:scale-95 duration-100'
                                        }`}
                                    disabled={isInstructorButtonDisabled}
                                    onClick={handleInstructorButtonDisabled}
                                >
                                    Make Instructor
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;