import React from "react";
import { useSpring, animated } from "react-spring";

const MusicSection = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <animated.section
      className="bg-gray-200 py-10 px-4 text-center"
      style={animationProps}
    >
      <h2 className="text-3xl font-bold mb-4">
        Welcome to our Music Academic Website
      </h2>
      <p className="text-lg mb-8">
        Learn music theory, explore different genres, and enhance your musical skills.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </animated.section>
  );
};

export default MusicSection;
