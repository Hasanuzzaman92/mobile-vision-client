import React, { useEffect, useState } from 'react';
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
        <div className="my-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categoryItems.map((categoryItem) => <CategoryItem

                    categoryItem={categoryItem}
                ></CategoryItem>)
            }
        </div>
    );
};

export default CategoryItems;