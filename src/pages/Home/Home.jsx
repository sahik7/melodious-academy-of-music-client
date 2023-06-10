import React from 'react';
import Carousel from './Slider/Carousal';
import PopularClasses from './PopularClasses/PopularClasses';
import Holder from '../../components/Holder';
import PopularInstructors from './PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Holder>
            <PopularClasses/>
            <PopularInstructors/>
            </Holder>
        </div>
    );
};

export default Home;