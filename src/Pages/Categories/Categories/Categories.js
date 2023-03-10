import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const categories = useLoaderData();
    return (
        <div className='my-10'>

           <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categories.map(category => <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
           </div>
        </div>
    );
};

export default Categories;