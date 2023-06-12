import React from 'react';
import Carousel from './Slider/Carousal';
import PopularClasses from './PopularClasses/PopularClasses';
import Holder from '../../components/Holder';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import FeaturesSection from './FeaturesSection/FeaturesSection';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Holder>
            <PopularClasses/>
            <PopularInstructors/>
            <FeaturesSection/>
            </Holder>
        </div>
    );
};

export default Home;