import React from 'react';

const FacilityCard = ({ image, title, description }) => {
    return (
        <div className="facility-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default FacilityCard;
