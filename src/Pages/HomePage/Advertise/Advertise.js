import React from "react";
import { Link } from "react-router-dom";
import advImage from "../../../Assests/advPhoto.jpg";

const Advertise = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={advImage}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Special Offer on
            <span className="text-secondary dark:dark:text-sky-400">
              flagship
            </span>
            device
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            We have special offer on flagship device. If you want to buy now
            please press the book now button.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to=""
              rel="noopener noreferrer"
              href="#"
              className="px-8 btn-primary py-3 text-lg font-semibold rounded dark:dark:bg-sky-400 dark:dark:text-gray-900"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
