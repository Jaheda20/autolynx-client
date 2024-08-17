import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import Font Awesome star icon

const RatingComponent = ({ maxStars = 5, initialRating = 0, onRate }) => {
    const [rating, setRating] = useState(initialRating);

    const handleClick = (star) => {
        setRating(star);
        if (onRate) onRate(star); // Call the callback function with the new rating
    };

    return (
        <div className="flex items-center space-x-1 cursor-pointer">
            {[...Array(maxStars)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`text-2xl transition-colors duration-300 ${
                        index < rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => handleClick(index + 1)}
                />
            ))}
            <p className="ml-3 text-gray-700">Your Rating: {rating}</p>
        </div>
    );
};

export default RatingComponent;
