import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const [categoryItems, setCategoryItems] = useState([])
    useEffect(()=>{
        fetch('https://mobile-vision-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => {
            data.map(category => setCategoryItems(category.categoryItems))
            
        })

    },[])
    
    return (
       <section>
         <div className="my-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categoryItems?.map((categoryItem, i) => <CategoryItem
                    key={i}
                    categoryItem={categoryItem}
                    setCategoryItems={setCategoryItems}
                ></CategoryItem>)
            }
            
        </div>
        {
            categoryItems.map((categoryItem, i) => <BookingModal
                key={i}
                categoryItem={categoryItem}
            ></BookingModal> ) 
        }

       </section>
    );
};

export default CategoryItems;