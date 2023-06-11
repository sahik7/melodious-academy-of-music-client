import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { RiFeedbackLine, RiEdit2Line } from 'react-icons/ri';
import { IdentityContext } from '../../../provider/IdentityProvider';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const MyClasses = () => {
    const {user} = useContext(IdentityContext)
    const {instance} = useAxiosProtect()
    const { data: instructorClasses = [], refetch } = useQuery(["instructor-classes"], async () => {
        const res = await instance(`/classes?email=${user.email}`);
        console.log(res.data)
        return res.data;
    });

  const handleDeleteButton = (classId) => {
    // Handle delete button click event
  };

  const handleUpdateButtonClick = (classId) => {
    // Handle update button click event
  };

  const handleFeedbackButtonClick = (classId) => {
    // Handle feedback button click event
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
            <th className="table-head">Price</th>
            <th className="table-head">Status</th>
            <th className="table-head">Enrolled Students</th>
            <th className="table-head">Update</th>
            <th className="table-head">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {instructorClasses.map((item, index) => (
            <tr key={index}>
              <td className="table-data text-center">{index + 1}</td>
              <td className="table-data text-center">
                <img src={item.image} alt="Profile" className="w-8 h-8 rounded-full" />
              </td>
              <td className="table-data text-center">{item.className}</td>
              <td className="table-data text-center">{item.instructorEmail}</td>
              <td className="table-data text-center">${item.price}</td>
              <td className="table-data text-center">{item.status}</td>
              <td className="table-data text-center">{item.enrolledStudents}</td>
              <td className="table-data text-center">
                <button
                  className="bg-blue-500 text-white font-bold text-sm py-1 px-3 rounded"
                  onClick={() => handleUpdateButtonClick(item._id)}
                >
                  <RiEdit2Line />
                </button>
              </td>
              <td className="table-data text-center">
                <button
                  className="bg-green-500 text-white font-bold text-sm py-1 px-3 rounded"
                  onClick={() => handleFeedbackButtonClick(item._id)}
                >
                  <RiFeedbackLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
