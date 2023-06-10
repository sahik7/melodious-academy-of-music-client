import React from 'react';
import Carousel from './Slider/Carousal';
import PopularClasses from './PopularClasses/PopularClasses';
import Holder from '../../components/Holder';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import MusicSection from './MusicSecion/MusicSection';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Holder>
            <PopularClasses/>
            <PopularInstructors/>
            <MusicSection/>
            </Holder>
        </div>
    );
};

export default Home;