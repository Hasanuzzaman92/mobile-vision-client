import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../Assests/error_page_image.jpg'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<img src={errorImage} alt="" />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className='text-red-500 mb-5'>{error.statusText || error.message}</p>
			<Link rel="noopener noreferrer" to="/" className="btn-primary px-8 py-3 font-semibold rounded dark:bg-sky-400 dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;