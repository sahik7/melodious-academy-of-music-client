import React, { useContext } from 'react';
import useAxiosProtect from '../../../../hooks/useAxiosProtect';
import { useQuery } from '@tanstack/react-query';
import { IdentityContext } from '../../../../provider/IdentityProvider';

const PaymentHistory = () => {
    const { instance } = useAxiosProtect()
    const {user} = useContext(IdentityContext)
    const { data: historyData = [], refetch } = useQuery(["payment-history"], async () => {
        const res = await instance(`/payment-history?email=${user?.email}`);
        console.log(res.data)
        return res.data;
    });
    console.log(historyData)
    return (
        <div className="w-9/12">
            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-second/50 text-left">
                        <th className="table-head rounded-tl-md">No</th>
                        <th className="table-head">Id</th>
                        <th className="table-head">Date</th>
                        <th className="table-head">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData.map((data, index) => (
                        <tr key={index}>
                            <td className="table-data">{index + 1}</td>
                            <td className="table-data">{data?.paymentId
}</td>
                            <td className="table-data">{data ? new Date(data.date).toLocaleString() : ''}</td>
                            <td className="table-data">${data?.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;