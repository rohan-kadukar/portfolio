import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-blue-500 font-semibold">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading; 