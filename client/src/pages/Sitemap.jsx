import React from 'react';

const ComingSoon = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Sitemap - Coming Soon!</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
                We're currently working on adding the sitemap for our website. Stay tuned for more updates!
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank you for your patience!</h3>
                <p className="text-gray-600 mb-6">We will have the sitemap page up and running soon. Please check back later.</p>
                <a href="/" className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600">
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default ComingSoon;
