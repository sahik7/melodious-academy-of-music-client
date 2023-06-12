import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const ManageUsers = () => {
    const {instance} = useAxiosProtect()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await instance("/users");
    console.log(res.data)
    return res.data;
  });

  console.log(users)

  const [disabledAdminButtons, setDisabledAdminButtons] = useState([]);
  const [disabledInstructorButtons, setDisabledInstructorButtons] = useState([]);

  const handleAdminButton = (id, index) => {
    updateUserPosition(id, index, 'admin');
  };

  const handleInstructorButton = (id, index) => {
    updateUserPosition(id, index, 'instructor');
  };

  const updateUserPosition = (id, index, position) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ position })
    })
      .then(response => response.json())
      .then(data => {
        if (data.modifiedCount) {
          if (position === 'admin') {
            setDisabledAdminButtons(prevDisabledButtons => {
              const updatedButtons = [...prevDisabledButtons];
              updatedButtons[index] = true;
              return updatedButtons;
            });
          } else if (position === 'instructor') {
            setDisabledInstructorButtons(prevDisabledButtons => {
              const updatedButtons = [...prevDisabledButtons];
              updatedButtons[index] = true;
              return updatedButtons;
            });
          }
          refetch();
        }
      });
  };

  const isAdminButtonDisabled = (index) => {
    return disabledAdminButtons[index];
  };

  const isInstructorButtonDisabled = (index) => {
    return disabledInstructorButtons[index];
  };

  return (
    <div className="w-9/12">
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-second/50 text-left">
            <th className="table-head rounded-tl-md">No</th>
            <th className="table-head">Image</th>
            <th className="table-head">Name</th>
            <th className="table-head">Email</th>
            <th className="table-head">Position</th>
            <th className="table-head">Make Admin</th>
            <th className="table-head rounded-tr-md">Make Instructor</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td className="table-data">{index + 1}</td>
              <td className="table-data">
                <img src={item?.image} alt="Profile" className="w-8 object-cover object-center h-8 rounded-full" />
              </td>
              <td className="table-data">{item?.name}</td>
              <td className="table-data">{item?.email}</td>
              <td className="table-data">{item?.position}</td>
              <td className="table-data">
                <button
                  className={`bg-third/20 border-2 rounded border-third font-bold text-sm py-1 px-3 mr-2 ${
                    isAdminButtonDisabled(index) ? 'opacity-50 hover:scale-100 text-second bg-third/100' : 'text-third hover:bg-third hover:text-second hover:scale-95 duration-100'
                  }`}
                  disabled={isAdminButtonDisabled(index)}
                  onClick={() => handleAdminButton(item._id, index)}
                >
                  Make Admin
                </button>
              </td>
              <td className="border-b pr-4 py-4">
                <button
                  className={`bg-main/20 border-2 rounded border-main font-bold text-sm py-1 px-3 mr-2 ${
                    isInstructorButtonDisabled(index) ? 'opacity-50 hover:scale-100 text-second bg-main/100' : 'text-main hover:bg-main hover:text-second hover:scale-95 duration-100'
                  }`}
                  disabled={isInstructorButtonDisabled(index)}
                  onClick={() => handleInstructorButton(item._id, index)}
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
