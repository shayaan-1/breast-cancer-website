import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      <img src={imageSrc} alt={title} className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
      <h3 className="text-2xl md:text-3xl font-semibold mt-4 md:mt-6 text-pink-700">{title}</h3>
      <p className="mt-3 md:mt-4 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
