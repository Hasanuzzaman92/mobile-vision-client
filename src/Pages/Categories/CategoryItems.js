import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const [categoryItems, setCategoryItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            data.map(category => setCategoryItems(category.categoryItems))
            
        })

    },[])
    console.log(categoryItems)
    
    return (
       <section>
         <div className="my-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categoryItems?.map((categoryItem) => <CategoryItem

                    categoryItem={categoryItem}
                ></CategoryItem>)
            }
        </div>
        {
            <BookingModal></BookingModal>
        }

       </section>
    );
};

export default CategoryItems;