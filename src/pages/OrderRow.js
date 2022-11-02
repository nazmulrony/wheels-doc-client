import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDeleteORder, handleUpdateOrder }) => {
    const { _id, service, serviceName, price, customer, phone, status } = order;
    const [orderService, setOrderService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteORder(_id)} className='btn btn-outline btn-error btn-circle btn-sm'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-24 h-24 rounded">
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>{price}</td>
            <td>
                <button onClick={() => handleUpdateOrder(_id)} className={`btn btn-sm rounded-full ${status ? 'btn-success' : 'btn-warning'}`}>
                    {status ? status : 'Pending'}
                </button>
            </td>
        </tr>
    );
};

export default OrderRow;