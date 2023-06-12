import React from "react";
import { useSpring, animated } from "react-spring";
import { MdTaskAlt,MdContactSupport } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';
import { RiVidiconLine } from 'react-icons/ri';

const FeaturesSection = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <>
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 my-64">
      <div className="border-2 border-second rounded-lg p-8 text-center -mt-10 bg-main flex justify-center items-center"><div className="">
        <MdTaskAlt size={40} className="text-second mx-auto"/>
        <div className="space-y-6 mt-4">
          <h2 className="text-2xl text-second">Weekly Task</h2>
          <p className="text-white font-light text-sm">
Achieve progress and make significant strides towards your goals by actively participating in our weekly tasks led by our experienced instructors. </p>
        </div>
        </div>
        </div>
      <div className="border-2 border-main rounded-lg p-8 text-center -mb-10 bg-second flex justify-center items-center"><div className="">
        <MdContactSupport size={40} className="text-main mx-auto"/>
        <div className="space-y-6 mt-4">
          <h2 className="text-2xl text-main">Support One-On-One</h2>
          <p className="text-main font-light text-sm">
Achieve progress and make significant strides towards your goals by actively participating in our weekly tasks led by our experienced instructors. </p>
        </div>
        </div>
        </div>
      <div className="border-2 border-second rounded-lg p-8 text-center -mt-10 bg-main flex justify-center items-center"><div className="">
        <TbExchange size={40} className="text-second mx-auto"/>
        <div className="space-y-6 mt-4">
          <h2 className="text-2xl text-second">Change Instructor</h2>
          <p className="text-white font-light text-sm">
Achieve progress and make significant strides towards your goals by actively participating in our weekly tasks led by our experienced instructors. </p>
        </div>
        </div>
        </div>
      <div className="border-2 border-main rounded-lg p-8 text-center -mb-10 bg-second flex justify-center items-center"><div className="">
        <RiVidiconLine size={40} className="text-main mx-auto"/>
        <div className="space-y-6 mt-4">
          <h2 className="text-2xl text-main">Online Classes</h2>
          <p className="text-main font-light text-sm">
Achieve progress and make significant strides towards your goals by actively participating in our weekly tasks led by our experienced instructors. </p>
        </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default FeaturesSection;
