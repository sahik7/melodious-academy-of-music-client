import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="p-20 bg-no-repeat  flex items-center bg-cover bg-center h-[48rem] bg-[url('https://images.pexels.com/photos/9083452/pexels-photo-9083452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
            <div className="flex  border-4 justify-end w-5/6 mx-auto">
                <div className="text-right w-1/2 p-10"><h1 className="text-8xl text-main">404</h1>
                <p className="text-2xl my-4 text-white">Oops! It looks like you've taken a detour into the unknown. Don't worry, we've got your back! </p>
                <Link to="/" className='btn-primary bg-main py-3 px-4'>Go Back Home</Link></div>
            </div>
        </div>
    );
};

export default NotFoundPage;