import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { RiFeedbackLine, RiEdit2Line } from 'react-icons/ri';
import { IdentityContext } from '../../../provider/IdentityProvider';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const MyClasses = () => {
  const { user } = useContext(IdentityContext)
  const { instance } = useAxiosProtect()
  const [isOpen, setIsOpen] = useState(false);
  const { data: instructorClasses = [], refetch } = useQuery(["instructor-classes"], async () => {
    const res = await instance(`/classes?email=${user.email}`);
    console.log(res.data)
    return res.data;
  });

  console.log("instructor classes", instructorClasses)


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const handleDeleteButton = (classId) => {
    // Handle delete button click event
  };

  const handleUpdateButtonClick = (classId) => {
    // Handle update button click event
  };

  return (
    <div className="w-9/12">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-75 absolute inset-0"></div>
          <div className="bg-white w-1/2 p-6 rounded-lg relative">
            <span onClick={closeModal} className="absolute top-0 right-0 cursor-pointer p-4">
              &times;
            </span>
            <div className="text-center p-5">
              <p className=' text-3xl font-bold text-main'>Feedback</p>
              <p className='w-2/3 mx-auto mt-10'>asdfaefawse ashufha r qrg uhv fd fhuh g hwubhu buh ufbh bhh buio;hsdfuhudfg</p>
            </div>
          </div>
        </div>
      )}
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
              <td className={` ${item.status === "denied" ? "block table-data text-center" : "hidden table-data text-center"}`}>
                <button
                  className={`  ${item.status === "denied" ? "block bg-green-500 text-white font-bold text-sm py-1 px-3 rounded" : "hidden bg-green-500 text-white font-bold text-sm py-1 px-3 rounded"}`}
                  onClick={openModal}
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
