import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const PopularClasses = () => {
    const { instance } = useAxiosProtect()

    const { data: classData = [], isLoading, refetch } = useQuery({
        queryFn: async () => {
            const res = await instance.get("/classes?topClass=top-6");
            return res?.data;
        },
        queryKey: ["classes"]

    })
    console.log(classData)
    return (
        <div>
            <h1>Popular Classes</h1>
        </div>
    );
};

export default PopularClasses;


