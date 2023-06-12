import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const ManageClasses = () => {
  const { instance } = useAxiosProtect();
  const { data: manageClasses = [], refetch } = useQuery(["manage-classes"], async () => {
    const res = await instance("/classes");
    console.log(res.data);
    return res.data;
  });

  const [selectedClass, setSelectedClass] = useState(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleApproveButtonClick = (classItem) => {
    classItem.status = 'approved';
    classItem.buttonsDisabled = true;
    updateClassStatus(classItem._id, 'approved');
  };

  const handleDenyButtonClick = (classItem) => {
    classItem.status = 'denied';
    classItem.buttonsDisabled = true;
    updateClassStatus(classItem._id, 'denied');
  };

  const handleFeedbackButtonClick = (classItem) => {
    setSelectedClass(classItem);
    setIsFeedbackModalOpen(true);
  };

  const handleFeedbackSubmit = () => {
    const classId = selectedClass._id;
  const feedback = feedbackText;
  updateClassStatus(classId,selectedClass.status, feedback);
  };

  const updateClassStatus = (classId, status, feedback = '') => {
    instance
      .patch(`/classes/${classId}`, { status, feedback })
      .then(() => {
        refetch();
        setFeedbackText('');
        setIsFeedbackModalOpen(false);
      })
      .catch((error) => {
        console.error('Failed to update class status:', error);
      });
  };
  const closeModal = () => {
    setIsFeedbackModalOpen(false);
  };

  return (
    <div className="w-9/12">
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-second/50 text-left">
            <th className="table-head rounded-tl-md">No</th>
            <th className="table-head">Image</th>
            <th className="table-head">Name</th>
            <th className="table-head">Instructor name</th>
            <th className="table-head">Instructor email</th>
            <th className="table-head rounded-tr-md">Available seats</th>
            <th className="table-head rounded-tr-md">Price</th>
            <th className="table-head rounded-tr-md">Status</th>
            <th className="table-head rounded-tr-md">Button</th>
          </tr>
        </thead>
        <tbody>
          {manageClasses.map((item, index) => (
            <tr key={index}>
              <td className="table-data">{index + 1}</td>
              <td className="table-data">
                <img src={item?.image} alt="Profile" className="w-8 h-8 rounded-full" />
              </td>
              <td className="table-data">{item?.className}</td>
              <td className="table-data">{item?.instructorName}</td>
              <td className="table-data">{item?.instructorEmail}</td>
              <td className="table-data">{item?.availableSeats}</td>
              <td className="table-data">{item?.price}</td>
              <td className="table-data">{item?.status}</td>
              <td className="table-data space-y-3">
              <button
                  className={`
                    } ${item.status !== "pending" || item.buttonsDisabled
                      ? "bg-disabled/50 cursor-not-allowed bg-third/80 border-2 rounded border-third/80 font-bold text-sm py-1 px-3 mr-2 text-white"
                      : "bg-third/20 border-2 rounded border-third font-bold text-sm py-1 px-3 mr-2"
                    }`}
                  onClick={() => handleApproveButtonClick(item)}
                  disabled={item.status !== "pending" || item.buttonsDisabled}
                >
                  Approve
                </button>
                <button
                  className={`
                    } ${item.status !== "pending" || item.buttonsDisabled
                      ? "bg-disabled/50 cursor-not-allowed bg-main/80 border-2 rounded border-main/80 font-bold text-sm py-1 px-6 mr-2 text-white"
                      : "bg-main/20 border-2 rounded border-main font-bold text-sm py-1 px-6 mr-2"
                    }`}
                  onClick={() => handleDenyButtonClick(item)}
                  disabled={item.status !== "pending" || item.buttonsDisabled}
                >
                  Deny
                </button>
                <button
                  className="bg-second/20 border-2 rounded border-second font-bold text-sm py-1 px-2 mr-2"
                  onClick={() => handleFeedbackButtonClick(item)}
                  disabled={(item.status !== 'approved' && item.status !== 'denied') || item.buttonsDisabled}
                >
                  Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Feedback Modal */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Provide Feedback</h2>
            <textarea
              className="w-full h-32 mb-4 p-2 border border-gray-300 rounded"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Write your feedback here"
            />
            <button
              className="text-gray-500 font-semibold mr-4"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              className="py-2 px-4 btn-primary"
              onClick={handleFeedbackSubmit}
            >
              Send Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
