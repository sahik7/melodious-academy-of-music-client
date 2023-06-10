import React from 'react';
import Carousel from './Slider/Carousal';
import PopularClasses from './PopularClasses/PopularClasses';
import Holder from '../../components/Holder';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Holder>
            <PopularClasses/>
            </Holder>
        </div>
    );
};

export default Home;