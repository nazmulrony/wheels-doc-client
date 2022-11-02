import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className="card card-compact w-96 shadow-xl p-4  bg-dark">
            <figure className='max-h-52 rounded-xl overflow-hidden'><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-light">
                <h2 className="card-title text-2xl">{title}</h2>

                <div className="card-actions justify-between items-center">
                    <p className='text-start text-red-600 text-xl font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary btn-circle btn-sm"> <FaArrowRight /> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;