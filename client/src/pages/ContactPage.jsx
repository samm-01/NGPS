import React, { useState } from 'react';
import axios from "axios";
import gallery1 from "../assets/images/background.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        reason_for_contact: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5050/api/contact", formData);

            if (response.status === 200) {
                alert('Thank you for reaching out! Your message has been sent successfully.');
                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    reason_for_contact: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div className="bg-gradient-to-r from-yellow-50 to-pink-50 py-16 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
                {/* Left Section - Contact Image */}
                <div className="md:w-1/2 w-full p-6 text-center md:text-left">
                    <h2 className="text-4xl font-semibold text-blue-600 mb-4">
                        Get in Touch With Us
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We would love to hear from you! Whether you have questions, concerns, or want to know more about our preschool,
                        feel free to reach out. We're here to help and support your child's educational journey.
                    </p>
                    <p className="text-lg text-gray-700">
                        Our team is committed to providing a safe and nurturing environment for your little one to grow, learn, and explore.
                    </p>
                </div>

                {/* Right Section - Contact Form */}
                <div className="md:w-1/2 w-full p-6 space-y-6">
                    <div className="bg-white p-8 rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-md font-semibold text-gray-700" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-md font-semibold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-md font-semibold text-gray-700" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Reason for Contact */}
                            <div>
                                <label className="block text-md font-semibold text-gray-700" htmlFor="reason">
                                    Reason for Contact
                                </label>
                                <select
                                    id="reason_for_contact"
                                    name="reason_for_contact"
                                    value={formData.reason_for_contact}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                                >
                                    <option value="">Select reason</option>
                                    <option value="admission">Admission Inquiry</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="general">General Query</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-md font-semibold text-gray-700" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Write your message here"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-pink-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
