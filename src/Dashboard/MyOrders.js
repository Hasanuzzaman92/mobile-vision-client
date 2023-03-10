import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Pages/Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('https://mobile-vision-server.vercel.app/bookings');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Mobile</th>
                            <th>Meeting Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.userName}</td>
                                <td>{booking.itemName}</td>
                                <td>{booking.location}</td>
                                <td>{booking.phone}</td>
                                <td>
                                {
                                        booking.price && !booking.paid &&
                                        <Link to=''>
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                        </Link>
                                    }
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;