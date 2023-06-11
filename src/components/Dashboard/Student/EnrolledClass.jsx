import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { IdentityContext } from '../../../provider/IdentityProvider';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const EnrolledClass = () => {
const {user} = useContext(IdentityContext);
const {instance} = useAxiosProtect()
    const { data: enrolledClasses = [], refetch } = useQuery(["enrolled"], async () => {
        const res = await instance(`/enrolled?email=${user?.email}`);
        console.log(res.data)
        return res.data;
    });
console.log(enrolledClasses)
    return (
        <div className="w-9/12 ">
            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-second/50 text-left">
                        <th className="table-head rounded-tl-md">No</th>
                        <th className="table-head">Image</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Price</th>
                        <th className="table-head">Seats</th>
                        <th className="table-head rounded-tr-md">Enrolled</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolledClasses.map((item, index) => (
                        <tr key={index}>
                            <td className="table-data">{index + 1}</td>
                            <td className="table-data">
                                <img src={item?.image} alt="Profile" className="w-8 h-8 rounded-full" />
                            </td>
                            <td className="table-data">{item?.titleName}</td>
                            <td className="table-data">${item?.price}</td>
                            <td className="table-data ">{item?.availableSeats}</td>
                            <td className="table-data"><div className="border-2 text-green-500 font-bold bg-second/50 text-center p-1 rounded  border-green-500">paid</div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClass;