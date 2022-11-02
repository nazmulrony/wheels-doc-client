import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email, orders])

    //delete order function
    const handleDeleteORder = id => {
        const confirm = window.confirm('Are you sure you want to cancel this order?');
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order Cancelled!')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    //Update order function
    const handleUpdateOrder = id => {
        const confirm = window.confirm('Do you want to update the status?')
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <div className='px-2 md:px-20 py-6 bg-mid min-h-screen'>
            <h3 className='font-bold text-4xl text-center my-4 text-dark'>You have {orders.length} orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            orders.map(order => <OrderRow
                                key={order._id} order={order}
                                handleDeleteORder={handleDeleteORder}
                                handleUpdateOrder={handleUpdateOrder}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;