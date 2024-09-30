import React from "react";

function Hero() {
  return (
    <>
      <div className="px-24 py-10 mt-10 flex items-center justify-between">
        <div className=" w-1/2">
          <h1 className=" text-9xl font-hero_heading font-extrabold">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className=" text-gray-600 font-bold ml-2 w-1/2 mt-8 text-xl ">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="mt-8 flex gap-8 items-center">
            <button className=" bg-red-700 px-8 py-1 text-white rounded-md text-center text-lg font-bold">
              Shop Now
            </button>
            <button className=" bg-white px-8 py-1 text-gray-600 rounded-md text-center text-lg border font-bold ">
              Category
            </button>
          </div>
          <div className="mt-8 ">
            <h1 className="font-semibold text-gray-600 text-xl">
              Also Available On
            </h1>
            <div className="flex gap-4 mt-4 cursor-pointer align-middle">
              <img src="/images/amazon.png" alt="" />
              <img src="/images/flipkart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="../public/images/hero-image.png"
            alt="hero image"
            className="size-128 "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
