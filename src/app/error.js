'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="text-6xl mb-4 animate-bounce">😕</div>
      <h1 className="text-4xl font-bold mb-4 text-center">Oops! Something went wrong</h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        {"Don't worry, it's not you - it's us. Let's try again."}
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
} 