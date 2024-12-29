import React from 'react';
import { Link } from 'react-router-dom';

import galleryImage1 from "../assets/images/image1.jpeg";
import galleryImage2 from "../assets/images/image2.jpeg";
import galleryImage3 from "../assets/images/image3.jpeg";
import galleryImage4 from "../assets/images/image4.jpeg";
import galleryImage5 from "../assets/images/image5.jpeg";
import galleryImage6 from "../assets/images/image6.jpeg";

const galleryImages = [
    { id: 1, src: galleryImage1, alt: 'Image 1' },
    { id: 2, src: galleryImage2, alt: 'Image 2' },
    { id: 3, src: galleryImage3, alt: 'Image 3' },
    { id: 4, src: galleryImage4, alt: 'Image 4' },
    { id: 5, src: galleryImage5, alt: 'Image 5' },
    { id: 6, src: galleryImage6, alt: 'Image 6' },
];

const GallerySection = () => {
    return (
        <section className="bg-yellow-50 py-16">
            <div className="container mx-auto px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Gallery</h2>
                <p className="text-lg sm:text-xl text-gray-600 text-center mb-12">
                    Take a glimpse into our campus life and activities through our gallery.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                {/* View More Button */}
                <div className="text-center mt-8">
                    <Link
                        to="/gallery"  // Use 'to' to navigate to the Gallery page
                        className="inline-block px-6 py-3 text-white bg-red-500 rounded hover:bg-red-700"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
