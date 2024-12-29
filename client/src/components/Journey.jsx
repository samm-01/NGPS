// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../assets/styles/Journey.css"; // Custom CSS
// import Img2016 from "../assets/images/2016.jpg";
// import Img2018 from "../assets/images/2018.jpg";
// import Img2020 from "../assets/images/2020.jpg";


// const Journey = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     return (
//         <div className="journey-page bg-gradient-to-r from-blue-50 via-pink-100 to-yellow-50">
//             <div className="container mx-auto py-12 px-4 sm:px-8">
//                 <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
//                     Our Journey
//                 </h1>
//                 <p className="text-lg text-center text-gray-600 mb-8">
//                     A glance at our journey since 2016 – growing together, one step at a
//                     time!
//                 </p>
//                 <Slider {...settings}>
//                     <div className="slide">
//                         <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
//                             <img
//                                 src={Img2016}
//                                 alt="Starting in 2016"
//                                 className="w-full h-80 object-cover rounded-t-lg"
//                             />
//                             <div className="card-content text-center mt-4">
//                                 <h2 className="text-2xl font-bold text-blue-500">2016</h2>
//                                 <p className="text-gray-600">
//                                     We began our journey with just 3 kids, a small classroom, and
//                                     a big dream to make education joyful.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="slide">
//                         <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
//                             <img
//                                 src={Img2018}
//                                 alt="Growing in 2018"
//                                 className="w-full h-64 object-cover rounded-t-lg"
//                             />
//                             <div className="card-content text-center mt-4">
//                                 <h2 className="text-2xl font-bold text-pink-500">2018</h2>
//                                 <p className="text-gray-600">
//                                     A leap forward! We expanded to a dedicated campus, enriching
//                                     the lives of 50+ students.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="slide">
//                         <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
//                             <img
//                                 src={Img2020}
//                                 alt="Present Growth"
//                                 className="w-full h-64 object-cover rounded-t-lg"
//                             />
//                             <div className="card-content text-center mt-4">
//                                 <h2 className="text-2xl font-bold text-yellow-500">2024</h2>
//                                 <p className="text-gray-600">
//                                     Today, with over 150 children, we continue to build a strong
//                                     foundation for lifelong learning.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Journey;

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChild, FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa"; // Example icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img2016 from "../assets/images/2016.jpg";
import Img2018 from "../assets/images/2018.jpg";
import Img2020 from "../assets/images/2020.jpg";


// Journey Component
const Journey = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-green-50">
            <div className="container mx-auto px-6 py-12">
                {/* Journey Header */}
                <motion.h2
                    className="text-4xl font-bold text-center text-blue-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Journey from 2016
                </motion.h2>

                {/* Image Slider for Journey */}
                <div className="mt-10  w-3/5">
                    <Slider {...settings}>
                        <div className="relative">
                            <img src={Img2016} alt="Journey Image 1" className="w-full rounded-lg shadow-lg" />
                            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                                <FaClock /> 2016 - The Beginning
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Img2018} alt="Journey Image 2" className="w-full rounded-lg shadow-lg" />
                            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                                <FaChild /> The First Batch
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Img2020} alt="Journey Image 3" className="w-full rounded-lg shadow-lg" />
                            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                                <FaMapMarkerAlt /> Expanding to New Locations
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Img2016} alt="Journey Image 4" className="w-full rounded-lg shadow-lg" />
                            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                                <FaStar /> Achieving Milestones
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* Timeline of Growth */}
                <motion.div
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="bg-pink-300 text-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold">Started with 3 Kids in 2016</h3>
                        <p className="mt-4 text-lg">
                            We began with a small group of 3 children, nurturing their curiosity, creativity, and learning in a
                            fun and safe environment.
                        </p>
                    </div>
                    <div className="bg-blue-500 text-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold">Growing Stronger Every Year</h3>
                        <p className="mt-4 text-lg">
                            Over the years, we've expanded to over 150 students, with a team of passionate educators dedicated to
                            shaping young minds.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Journey;
