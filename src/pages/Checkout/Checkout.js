import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Checkout = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, _id, price } = service;
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        if (phone.length < 10) {
            toast.error('Phone number should be at least 10 characters.')

        } else {
            fetch('https://wheels-doc-server-nazmulrony.vercel.app/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('wheels-doc-token')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    form.reset();
                    if (data.acknowledged) {
                        toast.success('Your Order has been placed successfully!')
                    }
                })
                .catch(error => console.error(error))
        }
    }
    return (
        <div className='bg-mid py-20 px-2 md:px-20'>
            <Toaster />
            <div className='relative'>
                <div className='relative rounded-xl overflow-hidden'>
                    <img src={checkout} alt="" className='mx-auto w-full rounded-xl' />
                    <div className='absolute top-0 left-0 bg-gradient-to-r from-black to-black/40 w-full h-full '></div>
                </div>
                <div className='absolute transform -translate-y-1/2 top-1/2 left-[10%]'>
                    <h1 className='text-light text-5xl font-bold'>Checkout</h1>
                </div>
            </div>
            <h2 className="text-3xl font-semibold text-center mt-10 text-dark">Service: {title}</h2>
            <form onSubmit={handlePlaceOrder} className='mt-6 p-4 md:p-16 rounded-xl bg-light shadow-xl shadow-black/20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered  w-full " required />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered  w-full " required />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered  w-full " required />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered  w-full " defaultValue={user?.email} readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered my-4 w-full h-32" placeholder="Your Message"></textarea>
                <input type="submit" value="Place Order" className='btn btn-primary w-full' />
            </form>

        </div>
    );
};

export default Checkout;