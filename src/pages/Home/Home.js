import React from 'react';
import About from './About';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-1 md:px-20 bg-brand'>
            <Banner />
            <About />
            <Services />

        </div>
    );
};

export default Home;