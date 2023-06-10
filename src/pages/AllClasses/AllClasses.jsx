import React, { useEffect, useState } from 'react';
import Holder from '../../components/Holder';
import SingleClass from './SingleClass';


const AllClasses = () => {
    const [allClasses, setAllClasses] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/classes").then(res => res.json()).then(data => setAllClasses(data))
    }, [])


    console.log(allClasses)
    

    return (
        <div className="my-32">
            <Holder>
                <h1 className="text-6xl text-center font-bold ">Enhance your skills through our interactive classes</h1>
                <div className="grid grid-cols-3 mt-20 gap-14">
                    {allClasses.map(data => <SingleClass data={data}/>)}
                </div>

            </Holder>
        </div>
    );
};

export default AllClasses;