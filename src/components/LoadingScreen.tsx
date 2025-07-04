import React from 'react';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 flex items-center justify-center z-50 transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234f46e5%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-purple-500/10 dark:bg-purple-400/20 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-32 w-24 h-24 bg-pink-500/10 dark:bg-pink-400/20 rounded-full animate-float-slow"></div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <Code2 size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
            Anubhav Singh
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Full Stack Developer</p>
        </div>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 mt-4 animate-pulse">Loading portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;