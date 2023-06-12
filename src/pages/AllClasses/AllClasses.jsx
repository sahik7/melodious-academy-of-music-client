import React, { useEffect, useState } from 'react';
import Holder from '../../components/Holder';
import SingleClass from './SingleClass';
import { useQuery } from '@tanstack/react-query';
import useAxiosProtect from '../../hooks/useAxiosProtect';


const AllClasses = () => {
    const { instance } = useAxiosProtect();
    const { data: allClasses = [], refetch } = useQuery(["manage-classes"], async () => {
        const res = await instance("/classes?approved=true");
        console.log(res.data);
        return res.data;
      });
    

    return (
        <div className="my-32">
            <Holder>
                <h1 className="text-6xl text-center font-bold ">Enhance your skills through our interactive classes</h1>
                <div className="grid grid-cols-3 mt-20 gap-14">
                    {allClasses.map(data => <SingleClass key={data._id} data={data}/>)}
                </div>

            </Holder>
        </div>
    );
};

export default AllClasses;