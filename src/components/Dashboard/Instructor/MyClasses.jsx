import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { RiFeedbackLine, RiEdit2Line } from 'react-icons/ri';
import { IdentityContext } from '../../../provider/IdentityProvider';
import useAxiosProtect from '../../../hooks/useAxiosProtect';
import { useForm } from 'react-hook-form';

const MyClasses = () => {
  const { user } = useContext(IdentityContext)
  const { instance } = useAxiosProtect()
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { data: instructorClasses = [], refetch } = useQuery(["instructor-classes"], async () => {
    const res = await instance(`/classes?email=${user.email}`);
    console.log(res.data)
    return res.data;
  });

  console.log("instructor classes", instructorClasses)


  const openModal = (feedback) => {
    setFeedback(feedback)
    setIsOpen(true);
  };
  const openUpdateModal = () => {
    setIsOpenUpdate(true);
  };
  const closeUpdateModal = () => {
    setIsOpenUpdate(false);
  };

  const closeModal = () => {
    setIsOpen(false);
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
              <p className='w-2/3 mx-auto mt-10'>{feedback}</p>
            </div>
          </div>
        </div>
      )}
      {isOpenUpdate && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-75 absolute inset-0"></div>
          <div className="bg-white w-1/2 p-6 rounded-lg relative">
            <span onClick={closeUpdateModal} className="absolute top-0 right-0 cursor-pointer p-4">
              &times;
            </span>
            <div className="text-center p-5">
              <p className=' text-3xl font-bold text-main'>Update Information</p>
              <form onSubmit={handleUpdateButtonClick} className="space-x-2">
                <input className='border border-neutral-300 rounded py-2 px-4'type="number" name="seats" placeholder="Seats" id="" />
                <input className='border border-neutral-300 rounded py-2 px-4'type="number" name="price" placeholder="Price" id="" />
                <input type="submit" className="btn-primary py-2 px-4 mt-10 " value="Update "/>
              </form>
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
                  className="btn-primary font-bold text-sm py-2 px-3 rounded"
                  onClick={openUpdateModal}
                >
                  <RiEdit2Line />
                </button>
              </td>
              <td className={` ${item.status !== "pending" ? "block table-data text-center" : "hidden"}`}>
                <button
                  className={`  ${item.status !== "pending" ? "block table-data font-bold text-md py-2 px-3 rounded" : "hidden"}`}
                  onClick={() => openModal(item.feedback)}
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
