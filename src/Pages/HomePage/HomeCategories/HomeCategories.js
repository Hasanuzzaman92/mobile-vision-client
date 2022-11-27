import React, { useEffect, useState } from 'react';
import HomeCategory from './HomeCategory';

const HomeCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('productCategories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='my-10'>
            <h2 className='mb-7 text-3xl font-bold text-center text-secondary'>Our Products</h2>
           <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categories.map(category => <HomeCategory
                    key={category._id}
                    category={category}
                ></HomeCategory>)
            }
           </div>
        </div>
    );
};

export default HomeCategories;