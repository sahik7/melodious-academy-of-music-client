import React, { useContext } from 'react';
import { IdentityContext } from '../provider/IdentityProvider';
import useAxiosProtect from './useAxiosProtect';
import { useQuery } from '@tanstack/react-query';

const useAdminVerify = () => {
    const { user } = useContext(IdentityContext)
    const { instance } = useAxiosProtect()
    const { data: validAdmin, isLoading } = useQuery({
        queryKey: ["validAdmin", user?.email], queryFn: async () => {
            const response = await instance.get(`/users/${user.email}`)
            console.log("is admin")
            return response.data.admin;
        }
    })
return { validAdmin, isLoading };
};

export default useAdminVerify;