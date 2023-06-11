import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosProtect from '../../../hooks/useAxiosProtect';
import { IdentityContext } from '../../../provider/IdentityProvider';
import { useNavigate } from 'react-router-dom';

const SelectedClass = () => {
    const { instance } = useAxiosProtect()
    const navigate = useNavigate()
    const { user } = useContext(IdentityContext)
    const { data: myClasses = [], refetch } = useQuery(["my-classes"], async () => {
        const res = await instance(`/my-classes/${user?.email}`);
        console.log(res.data)
        return res.data;
    });
    const handleDeleteButton = async (id) => {
        console.log("delete button" ,id)
        const res = await instance.delete(`/my-classes/${id}`)  
        refetch();
    };

    const handlePayButtonClick = (productId, price) => {
        navigate(`/dashboard/payment/${price}/${productId}`, { state: { price, productId } });
    }
    console.log(myClasses)

    return (
        <div className="w-9/12 ">
            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-second/50 text-left">
                        <th className="table-head rounded-tl-md">No</th>
                        <th className="table-head">Image</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Email</th>
                        <th className="table-head">Seats</th>
                        <th className="table-head">Price</th>
                        <th className="table-head">Delete</th>
                        <th className="table-head rounded-tr-md">Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {myClasses.map((item, index) => (
                        <tr key={index}>
                            <td className="table-data">{index + 1}</td>
                            <td className="table-data">
                                <img src={item?.image} alt="Profile" className="w-8 h-8 rounded-full" />
                            </td>
                            <td className="table-data">{item?.titleName}</td>
                            <td className="table-data">{item?.email}</td>
                            <td className="table-data">{item?.availableSeats}</td>
                            <td className="table-data">${item?.price}</td>
                            <td className="table-data">
                                <button
                                    className={`bg-third/20 border-2 rounded border-third font-bold text-sm py-1 px-3`}
                                    onClick={() => handleDeleteButton(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                            <td className="table-data">
                                <button
                                    className={`bg-main/20 border-2 rounded border-main font-bold text-sm py-1 px-3`}
                                    onClick={() => handlePayButtonClick(item?.price, item?.id)}
                                >
                                    Pay
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;
