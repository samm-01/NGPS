

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faChildren, faSchool, faBookReader } from '@fortawesome/free-solid-svg-icons';

const BlogsPage = () => {
    const blogs = [
        {
            title: "The Importance of Early Childhood Education",
            date: "December 15, 2024",
            icon: faChalkboardTeacher,
            content: "Early childhood education plays a crucial role in shaping a child’s future. Learn about the benefits of starting education at an early age...",
            link: "/blog/1"
        },
        {
            title: "Creative Activities for Toddlers",
            date: "December 10, 2024",
            icon: faChildren,
            content: "Toddlers are naturally curious. Discover some fun and creative activities that can foster their creativity and cognitive skills...",
            link: "/blog/2"
        },
        {
            title: "Why Play is Essential for Learning",
            date: "December 5, 2024",
            icon: faSchool,
            content: "Play isn’t just fun – it’s essential for a child’s learning and development. Find out how play-based learning can benefit kids...",
            link: "/blog/3"
        },
        {
            title: "Building Emotional Intelligence in Kids",
            date: "November 30, 2024",
            icon: faBookReader,
            content: "Emotional intelligence is vital for children's overall development. Read on to understand how to nurture emotional intelligence in kids...",
            link: "/blog/4"
        },
    ];

    return (
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-16">
            <div className="container mx-auto text-center px-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8">Our Latest Blog Posts</h1>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Stay informed with the latest tips and articles on early childhood education, play-based learning, and child development.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex items-center space-x-4 mb-6">
                                <FontAwesomeIcon icon={blog.icon} className="text-red-500 text-3xl " />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800">{blog.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{blog.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 text-base">{blog.content}</p>
                            <a href={blog.link} className="text-red-500 hover:text-red-700 font-semibold">Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ml-2" /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;

