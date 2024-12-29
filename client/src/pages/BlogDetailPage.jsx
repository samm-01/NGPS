import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faChildren, faSchool, faBookReader } from '@fortawesome/free-solid-svg-icons';

const BlogDetailPage = () => {
    const { blogId } = useParams();

    const blogs = [
        {
            id: 1,
            title: "Why Early Childhood Education is Important",
            icon: faChalkboardTeacher,
            content: "In this blog post, we explore the various reasons why early childhood education is essential for the overall development of a child. It lays the foundation for lifelong learning and success, fostering cognitive, emotional, and social skills that will benefit children in school and beyond.",
            date: "December 15, 2024",
        },
        {
            id: 2,
            title: "5 Fun Activities to Boost Your Child's Creativity",
            icon: faChildren,
            content: "Creativity is an important aspect of your child's development. Here are 5 fun activities to boost creativity: drawing, storytelling, pretend play, building with blocks, and outdoor exploration. These activities will help nurture their imagination and problem-solving abilities.",
            date: "December 10, 2024",
        },
        {
            id: 3,
            title: "Why Play is Essential for Learning",
            icon: faSchool,
            content: "Play isn’t just fun – it’s an essential part of a child’s learning and development. Through play, children not only engage in enjoyable activities but also develop critical cognitive, social, emotional, and physical skills. Play stimulates brain development by encouraging problem-solving, memory, and critical thinking, enhancing a child’s cognitive abilities. It also fosters creativity and imagination, allowing children to express themselves and think outside the box, which is important for future innovation. Additionally, play promotes social skills, as children learn how to cooperate, share, and resolve conflicts, helping them build strong relationships and emotional intelligence. Language development is another key benefit of play-based learning, as children expand their vocabulary and improve their listening and speaking abilities while interacting with others. Lastly, active play supports physical development, helping children improve their motor skills, balance, and coordination. In essence, play is a fundamental tool for holistic development, making it crucial for parents, teachers, and caregivers to integrate play-based learning into children’s daily lives.",
            date: "December 5, 2024",
        },
        {
            id: 4,
            title: "Building Emotional Intelligence in Kids",
            date: "November 30, 2024",
            icon: faBookReader,
            content: "Emotional intelligence (EI) is crucial for a child's overall development, influencing their ability to understand and manage their emotions, build relationships, and navigate social challenges. To nurture EI, encourage children to express their feelings and validate their emotions. Teach them empathy by discussing how others might feel in different situations. Modeling emotional regulation, such as staying calm in stressful situations, helps children learn how to manage their own emotions. Additionally, teaching problem-solving and conflict-resolution skills can boost a child’s ability to handle difficult situations. Building emotional intelligence early fosters resilience, positive behavior, and better interpersonal skills.",
        },
        // More blogs can be added here...
    ];

    const blog = blogs.find((b) => b.id === parseInt(blogId));

    return (
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">{blog?.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{blog?.date}</p>

                <div className="flex justify-center mb-6">
                    <FontAwesomeIcon icon={blog?.icon} className="text-red-500 text-4xl" />
                </div>

                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-gray-700 text-base leading-relaxed">{blog?.content}</p>
                </div>

                <div className="mt-8 text-center">
                    <a href="/blogs" className="text-red-500 hover:text-red-700 font-semibold text-lg">Back to Blog</a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
