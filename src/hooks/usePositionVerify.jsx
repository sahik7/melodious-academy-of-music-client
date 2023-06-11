import React, { useContext } from 'react';
import { IdentityContext } from '../provider/IdentityProvider';
import useAxiosProtect from './useAxiosProtect';
import { useQuery } from '@tanstack/react-query';

const usePositionVerify = () => {
    const { user } = useContext(IdentityContext)
    const { instance } = useAxiosProtect()
    const { data: validPosition, isLoading:isPositionLoading } = useQuery({
        queryKey: ["validPosition", user?.email], queryFn: async () => {
            const response = await instance(`/users/${user.email}`)
            console.log(response.data.position)
            return response.data.position;
        }
    })
return { validPosition, isPositionLoading };
};

export default usePositionVerify;