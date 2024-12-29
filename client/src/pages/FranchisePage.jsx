import React from 'react';
import { FaBusinessTime, FaHandshake, FaBullhorn } from 'react-icons/fa';

const FranchisePage = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-8">Franchise Opportunities</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-12">
                    We are excited to offer franchise opportunities! Discover how you can be a part of our growing family.
                </p>

                {/* Franchise Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Business Opportunity */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <FaBusinessTime className="w-12 h-12 text-indigo-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Business Opportunity</h3>
                        <p className="text-gray-600 mt-4">
                            A great opportunity to own and run your own franchise with our proven business model.
                        </p>
                    </div>

                    {/* Feature 2: Training and Support */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <FaHandshake className="w-12 h-12 text-teal-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-teal-800">Training and Support</h3>
                        <p className="text-gray-600 mt-4">
                            We provide comprehensive training and ongoing support to help you succeed.
                        </p>
                    </div>

                    {/* Feature 3: Marketing Support */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <FaBullhorn className="w-12 h-12 text-yellow-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-800">Marketing Support</h3>
                        <p className="text-gray-600 mt-4">
                            We offer full marketing support to help you promote your franchise and grow your business.
                        </p>
                    </div>
                </div>

                {/* Coming Soon Message */}
                <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
                    <p className="text-3xl font-semibold text-indigo-800">Coming Soon</p>
                    <p className="text-gray-600 mt-4">
                        Our franchise opportunities are currently being prepared. Please check back soon for more details on how you can join our family.
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300">
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FranchisePage;
