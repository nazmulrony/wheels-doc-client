import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='md:max-h-[85vh] w-full relative rounded-xl overflow-hidden'>
                <img alt='' src={image} className=" h-full w-full object-cover rounded-xl" />
                <div className='absolute top-0 left-0 bg-gradient-to-r from-black to-black/40 w-full h-full '></div>
            </div>
            <div className="absolute transform -translate-y-1/2 mt-5 md:mt-0 left-2  md:left-20 right-14 md:right-1/2  top-[30%] md:top-1/2 text-light">
                <h1 className='md:text-6xl text-2xl font-bold'>Affordable  Price <br /> For Car   Servicing</h1>
                <p className='md:text-xl text-sm md:my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className=' flex gap-4'>
                    <button className="btn  btn-primary">Discover More</button>
                    <button className="btn btn-outline btn-primary">Latest Projects</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  md:gap-6 gap-2 right-4 md:right-14 -bottom-2 md:bottom-0 ">
                <a href={`#slide${prev}`} className="btn btn-circle btn-sm md:btn-md btn-primary ">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-sm md:btn-md btn-primary">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;