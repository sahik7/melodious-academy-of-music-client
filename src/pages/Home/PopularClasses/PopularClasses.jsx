import { useQuery } from '@tanstack/react-query';
import useAxiosProtect from '../../../hooks/useAxiosProtect';
import PopularClass from './PopularClass';

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
        <>
        <div className="group w-1/2 mx-auto"><h1 className="text-5xl text-center mt-32 group-hover:text-second rounded group-hover:bg-main py-2 duration-300  text-main font-avail">Popular Classes</h1>
        <hr  className="border-2 mt-6 border-second rounded-full  w-4/12 mx-auto"/></div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-32'>
            
            {classData.map(eachClass => <PopularClass key={eachClass._id} eachClass={eachClass}/>)}

        </div>
        </>
    );
};

export default PopularClasses;


