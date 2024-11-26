import React from 'react';

const LoadingCard = () => {
  return (
    <div className="text-lg bg-white p-5 border rounded-lg shadow-md m-5 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mt-3"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mt-3"></div>
    </div>
  );
};

export default LoadingCard;
