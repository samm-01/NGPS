import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            message: "This is the best play school in Zirakpur! My child loves attending, and we are so impressed with the teachers and the environment.",
            name: "Neha Sharma",
            role: "Parent",
            photo: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
            message: "We are so happy with the progress our child has made. The teachers are amazing, and the learning environment is perfect for little ones!",
            name: "Rajeev Kumar",
            role: "Parent",
            photo: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            message: "A wonderful place for children to grow and learn. We highly recommend this play school for anyone looking for quality education and care.",
            name: "Pooja Mehra",
            role: "Parent",
            photo: "https://randomuser.me/api/portraits/women/2.jpg",
        }
    ];

    return (
        <section className="bg-gray-100 py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
            <div className="container mx-auto px-6 sm:px-12 md:px-24 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">What Our Parents Say</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 italic mb-4">"{testimonial.message}"</p>
                            <div className="flex items-center justify-center">
                                <img src={testimonial.photo} alt="Parent Photo" className="rounded-full w-12 h-12 mr-4" />
                                <div>
                                    <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                                    <p className="text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
