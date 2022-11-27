import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <Advertise></Advertise>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;