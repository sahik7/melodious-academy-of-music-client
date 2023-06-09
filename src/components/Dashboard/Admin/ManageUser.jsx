import React from 'react';

const ManageUser = () => {
    const handleInstructorButtonDisabled = () => {

        setInstructorButtonDisabled(true);
    };

    return (
        <>
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
                                    onClick={() => handleAdminButton(item._id)}
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
        </>
    );
};

export default ManageUser;