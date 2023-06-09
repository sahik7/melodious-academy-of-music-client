import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdentityContext } from '../provider/IdentityProvider';
import axios from 'axios';


const useAxiosProtect = () => {
    const { logOut } = useContext(IdentityContext);
    const navigate = useNavigate();
    const instance = axios.create({ baseURL: 'http://localhost:5000' })

    useEffect(() => {
        instance.interceptors.request.use((config) => {
            const token = localStorage.getItem('private-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate, instance]);

    return { instance };
};


export default useAxiosProtect;