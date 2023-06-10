import React from 'react';
import Holder from '../Holder';
import { Link } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';

const Footer = () => {
    return (
        <div>
            
            <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className=" bg-[url('https://i.ibb.co/YZJnZMw/start-b.png')] text-second h-[500px] flex items-center justify-center">
        <div>
        <h2 className=" text-3xl font-avail font-bold">Necessary Links</h2>
        <div className="ml-2 flex flex-col mt-6 space-y-2">
            <Link className="text-xl" to="/">Home</Link>
            <Link className="text-xl" to="/instructors">Instructors</Link>
            <Link className="text-xl" to="classes">Classes</Link>
        </div>
        </div>
        </div>
        <div className=" bg-[url('https://i.ibb.co/ncsZH8S/mid-b.png')] text-main h-[500px] flex items-center justify-center">
        <div>
        <h2 className=" text-3xl font-avail font-bold">Contacts</h2>
        <div className="ml-2 flex flex-col mt-6 space-y-2">
            <p className="text-xl flex items-center" to="/"><IoIosMail/>mamlearn@gmail.com</p>
            <p className="text-xl flex items-center" to="/instructors"><BsFillTelephoneFill/>+444-4332-222</p>
            <p className="text-xl flex items-center" to="classes"><TbWorldWww/>www.website.com</p>
        </div>
        </div>
        </div>
        <div className=" bg-[url('https://i.ibb.co/FbCjHph/end-b.png')] text-second h-[500px] flex items-center justify-center">
        <div>
        <h2 className=" text-3xl font-avail font-bold mx-auto w-1/2">Address</h2>
        <div className="ml-2 flex flex-col mt-6">
            <p className="text-xl flex items-center mx-auto w-1/2" to="/">Meledious Academy of Music
1234 Harmonious Street
City of Melodia</p>
        </div>
        </div>
        </div>
            </div>
            <div className="bg-black py-8">
            <Holder>
                <div className="flex items-center justify-between font-light">
                <img className="w-28" src="https://i.ibb.co/W3FH5Zx/big-logo.png" alt="" />
                <p className="text-white">&copy; 2023 Meledious Academy of Music. All rights reserved.</p>
                </div>
            </Holder>
            </div>
        </div>
    );
};

export default Footer;