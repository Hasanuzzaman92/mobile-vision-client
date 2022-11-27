import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({category}) => {
    const {categoryName, img} = category
    return (
        <div className="rounded-md border-2 hover:scale-105 shadow-lg dark:dark:bg-gray-900 dark:dark:text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
             {categoryName}
            </h2>
          </div>
          <Link to={`/categories/${categoryName}`}>
          <button
            type="button"
            className="btn-primary flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:dark:bg-sky-400 dark:dark:text-gray-900"
          >
            View more
          </button>
          </Link>
          
        </div>
      </div>
    );
};

export default HomeCategory;