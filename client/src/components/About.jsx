import React from 'react';

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* About Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 sm:px-12 md:px-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">Our Journey and Recognition</h2>

                    {/* Registration and Growth Info */}
                    <div className="space-y-8">
                        {/* Registration Info */}
                        <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Registered Under Punjab Society Registration Act, 1860</h3>
                            <p className="text-lg">
                                Our school is a registered entity under the Punjab Society Registration Act of 1860, ensuring transparency, legality, and commitment to quality education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Founder’s Message</h2>
                    <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center">
                        <div className="mb-6 md:mb-0 md:mr-6">
                            <img src="/assets/founder.jpg" alt="Founder" className="w-36 md:w-64 h-36 rounded-full shadow-lg" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 mb-4">
                                Welcome to our preschool! When I founded this institution in 2016, my vision was to create a space where children could explore their potential in a nurturing and joyful environment.
                            </p>
                            <p className="italic text-red-500 font-semibold">
                                "The purpose of education is to replace an empty mind with an open one." – Malcolm Forbes
                            </p>
                            <div className="mt-4">
                                <p className="text-lg font-bold text-gray-800">Renu Bala</p>
                                <p className="text-sm text-gray-500">Founder & President</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
