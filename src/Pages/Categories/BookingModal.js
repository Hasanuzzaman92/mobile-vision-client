import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({categoryItem}) => {
    const {name, resalePrice} = categoryItem
    const {user} = useContext(AuthContext)

    const handleBooking =(event) =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            userName,
            email,
            itemName,
            price,
            phone,
            location
        }

        fetch('https://mobile-vision-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                       
                        <input name="userName" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="itemName" type="text" defaultValue={name} disabled placeholder="Item Name" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue= {resalePrice} disabled placeholder="Price" className="input w-full input-bordered" />
                        <input name="phone" type="text"  placeholder="Your phone" className="input w-full input-bordered" />
                        <input name="location" type="text"  placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;