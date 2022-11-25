import React from "react";
import device from '../../../Assests/devices.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={device} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
        <div>
          <h1 className="text-5xl font-bold">Welcome to <span className="text-secondary">Mobile Vision</span></h1>
          <p className="py-6">
            we are very trusted for used phone buying and selling media. You can sell or buy your used phone from us. We have awesome feedback from buyer and seller
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
