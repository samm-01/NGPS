import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faChild, faBook, faPaintBrush, faBasketballBall, faBus } from "@fortawesome/free-solid-svg-icons";

const EducationSection = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 bg-gradient-to-r from-blue-50 via-pink-100 to-yellow-50">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-800">Our Educational Facilities</h2>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                    At Next Gen Play School, we provide a rich and nurturing environment with modern facilities that foster creativity, learning, and growth in every child.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {/* Facility 1: Modern Classrooms */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-indigo-800">Modern Classrooms</h3>
                    <p className="text-gray-600 mt-4">
                        {/* Our classrooms are equipped with modern educational tools and a comfortable, stimulating environment for children to thrive. */}
                        Equipped with advanced tools for an engaging and comfortable learning experience.

                    </p>
                </div>

                {/* Facility 2: Play Area */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon icon={faChild} className="w-12 h-12 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-teal-800">Play Area</h3>
                    <p className="text-gray-600 mt-4">
                        A safe and creative outdoor space designed to encourage teamwork and fun.
                    </p>
                </div>

                {/* Facility 3: Library */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon icon={faBook} className="w-12 h-12 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-yellow-800">Library</h3>
                    <p className="text-gray-600 mt-4">
                        A well-stocked library to inspire a love of reading and exploration.
                    </p>
                </div>

                {/* Facility 4: Art and Music Studio */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon icon={faPaintBrush} className="w-12 h-12 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-pink-800">Art & Music Studio</h3>
                    <p className="text-gray-600 mt-4">
                        A creative space for children to express themselves through art and music.
                    </p>
                </div>

                {/* Facility 5: Sports Facilities */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon icon={faBasketballBall} className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-800">Sports Facilities</h3>
                    <p className="text-gray-600 mt-4">
                        Indoor and outdoor sports areas to promote physical fitness and teamwork.
                    </p>
                </div>

                {/* Facility 6: Transportation */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                        <FontAwesomeIcon icon={faBus} className="w-12 h-12 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-red-800">Transportation</h3>
                    <p className="text-gray-600 mt-4">
                        Safe, reliable transport services ensuring hassle-free commutes for students.





                    </p>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
