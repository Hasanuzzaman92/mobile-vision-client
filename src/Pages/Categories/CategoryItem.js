import React from 'react';

const CategoryItem = ({categoryItem}) => {
	const {name, image, location, resalePrice, originalPrice, usageDuration, sellerName} = categoryItem
    return (
        <div className=" border-2 rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl text-secondary font-semibold tracking-wide">{name}</h2>
			<p className="flex justify-between dark:dark:text-gray-100"> <span className='font-bold text-primary'> Price: ${resalePrice}</span> <span> Original Price: ${originalPrice}</span></p>
			<p className="flex justify-between dark:dark:text-gray-100"> <span className='font-bold'> Used Time: {usageDuration}</span> <span> Location: ${location}</span></p>
			<p className="flex justify-between dark:dark:text-gray-100"> Seller Name: {sellerName} </p>
			
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:dark:bg-sky-400 dark:dark:text-gray-900">Read more</button>
	</div>
</div>
    );
};

export default CategoryItem;