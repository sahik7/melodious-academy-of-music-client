import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdentityContext } from '../provider/IdentityProvider';

const createAxiosProtect = () => {
    const instance = axios.create({
        baseURL: 'https://http://localhost:5000',
    });

    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    return instance;
}

const useAxiosProtect = () => {
    const { logOut } = useContext(IdentityContext);
    const navigate = useNavigate();
    const axiosProtect = createAxiosProtect();

    useEffect(() => {
        const responseInterceptor = axiosProtect.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosProtect.interceptors.response.eject(responseInterceptor);
        };
    }, [axiosProtect, logOut, navigate]);

    return [axiosProtect];
};


export default useAxiosProtect;