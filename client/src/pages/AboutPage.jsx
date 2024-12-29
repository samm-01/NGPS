import React from 'react';
import FounderImg from "../assets/images/founder.jpg"

const AboutPage = () => {
    return (
        <div className=" text-gray-800 bg-gradient-to-r from-blue-50 via-pink-100 to-yellow-50">
            {/* About Section */}
            <section className="bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50 py-16">
                <div className="container mx-auto px-6 sm:px-12 md:px-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">Our Journey and Recognition</h2>

                    {/* Registration Info */}
                    <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Registered Under Punjab Society Registration Act, 1860</h3>
                        <p className="text-lg">
                            Our school is a registered entity under the Punjab Society Registration Act of 1860, ensuring transparency, legality, and commitment to quality education. We adhere to all necessary guidelines to provide a safe and nurturing environment for our students.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="bg-gradient-to-r from-blue-50 via-pink-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Founder’s Message</h2>
                    <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center">
                        <div className="mb-6 md:mb-0 md:mr-6">
                            <img src={FounderImg} alt="Founder" className="md:w-96 w-36 h-48 rounded-full shadow-lg" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 mb-4">
                                Welcome to our preschool! When I founded this institution in 2016, my vision was to create a space where children could explore their potential in a nurturing and joyful environment.
                            </p>
                            <p class="text-lg text-gray-700 mb-4">

                                We began our journey in 2016 with just 3 children, and over the years, we have grown to an
                                inspiring strength of 150+ students. This growth reflects the trust and confidence parents have
                                in our educational philosophy and the dedication of our faculty and staff.
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

export default AboutPage;
