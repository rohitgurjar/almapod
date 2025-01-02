import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8">
      <div className="sm:container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-purple-800 mb-2">
            HI,
          </h2>
          <h1 className="text-5xl font-extrabold text-blue-700 mb-2">
            Rohit Gurjar
          </h1>
          <p className="text-2xl text-gray-700 mb-4">Software Developer</p>
          <p className="text-lg text-gray-500 mb-6 leading-relaxed">
            A React.js Developer is a front-end software engineer responsible
            for designing, developing, and implementing user interface
            components for web applications.
          </p>
          <button
            type="button"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Hire Me
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/banner.jpg"
            alt="Website Banner"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
