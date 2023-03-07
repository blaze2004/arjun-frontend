import React from 'react';

const Loading=() => {
    return (
        <div className="flex flex-col items-center justify-center h-screen z-100">
            <div className="w-12 h-12 border-4 border-gray-400 rounded-full animate-spin"></div>
            <div className="mt-4 text-gray-500">Loading...</div>
        </div>
    );
};

export default Loading;
