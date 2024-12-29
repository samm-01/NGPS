import React from "react";

function PlaySchoolSection() {
    return (
        <section className="bg-gray-100 py-16 text-center ">
            <div className="container mx-auto px-6 sm:px-12 md:px-24">
                <h2 className="text-red-500 text-3xl sm:text-4xl font-bold mb-4">
                    No. 1 Play School in Zirakpur
                </h2>
                <p className="text-black text-lg sm:text-xl">
                    Join the best learning experience for your little ones. Providing top-notch education and care since 2016.
                </p>
                <a
                    href="/contact"
                    className="mt-6 inline-block px-6 py-3 text-white bg-red-500 rounded hover:bg-red-700"
                >
                    Join Us
                </a>
                {/* <button className="animate-pulse bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold py-2 px-4 rounded-full">
                    Join Us!
                </button>
            <div className="animate-bounce text-blue-500 text-3xl">
                🌟
            </div>
            <div className="animate-float bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 p-4 rounded-full shadow-md w-16 h-16">
                🎈
            </div>
            <div className="hover:animate-wiggle text-red-500 text-3xl">
                🎉 Click Me!
            </div> */}

            </div>
        </section>
    );
}

export default PlaySchoolSection;
