import React from "react";
import { motion } from "framer-motion";  // Optional for animation
import Gallery1 from "../assets/images/Gallery1.jpg"; // Import image
import Gallery2 from "../assets/images/Gallery2.jpg"; // Import image
import Gallery3 from "../assets/images/Gallery3.jpg"; // Import image
import Gallery4 from "../assets/images/Gallery4.jpg"; // Import image
import Gallery5 from "../assets/images/Gallery5.jpg"; // Import image
import Gallery6 from "../assets/images/Gallery6.jpg"; // Import image

const Gallery = () => {
    // Array of images and their descriptions
    const images = [
        { src: Gallery1, description: "Children learning through play" },
        { src: Gallery2, description: "Interactive learning sessions" },
        { src: Gallery3, description: "Creative activities and fun" },
        { src: Gallery4, description: "Outdoor play and socializing" },
        { src: Gallery5, description: "Celebration of a successful year" },
        { src: Gallery6, description: "Team of dedicated teachers" },
    ];

    return (
        <div className="bg-yellow-50 py-16">
            <div className="container mx-auto px-6 sm:px-12">
                {/* Gallery Header */}
                <motion.h2
                    className="text-4xl font-bold text-center text-blue-600 mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Gallery
                </motion.h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-64 object-cover transform transition-all duration-300 group-hover:scale-110"
                            />

                            {/* Description Text */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-lg font-semibold">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
