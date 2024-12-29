import React from "react";
import FacilityCard from "./FacilityCard";

function FacilitiesSection() {
    const facilities = [
        {
            title: "Computer Lab",
            description: "Our well-equipped computer lab ensures students stay up-to-date with technology.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Library",
            description: "Encouraging a love for reading and learning with our wide range of resources.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Activity Hall",
            description: "A space for extracurricular activities enhancing overall development.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Sports Ground",
            description: "Promoting health and teamwork through physical education and sports.",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 sm:px-12 md:px-24 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Facilities</h2>
                <p className="text-lg sm:text-xl mb-8 text-gray-600">
                    We provide a wide range of facilities to ensure a holistic learning experience for our students.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <FacilityCard key={index} {...facility} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FacilitiesSection;
