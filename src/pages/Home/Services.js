import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center text-light py-8' id='services'>
            <h5 className='text-2xl text-red-600 font-bold'> Services</h5>
            <h1 className="text-5xl text-dark font-bold ">Our Service Area</h1>
            <p className='md:w-1/2 mx-auto '>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 md:grid-cols-3 my-4 gap-4 md:gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <button className="btn btn-outline btn-primary my-3">More Services</button>
        </div>
    );
};

export default Services;