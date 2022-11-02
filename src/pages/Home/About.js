import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-16  text-light rounded-xl  ">
            <div className="hero-content flex-col gap-16 lg:flex-row relative">
                <div className='flex-1  relative '>
                    <img alt='' src={person} className="  w-[85%]  rounded-lg" />
                    <img alt='' src={parts} className=" absolute top-1/2  right-0 w-2/3  border-8 border-brand " />
                </div>
                <div className='flex-1'>
                    <h6 className='text-2xl text-red-600 font-bold'>About Us</h6>
                    <h1 className=" text-4xl md:text-5xl font-bold text-dark">We are qualified & of experience in this field</h1>
                    <p className="py-4 text-light">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-light'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary my-4">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;