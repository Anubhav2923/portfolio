<<<<<<< HEAD
import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
=======
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import PeekingButton from './PeekingButton';
>>>>>>> 69b1ebb188397bc239c326e479420144715d2e4c

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234f46e5%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-purple-500/10 dark:bg-purple-400/20 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-32 w-24 h-24 bg-pink-500/10 dark:bg-pink-400/20 rounded-full animate-float-slow"></div>

      {/* Additional Animated Shapes */}
      <div
        className="absolute top-32 left-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg animate-geometric-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 right-20 w-18 h-18 bg-gradient-to-r from-purple-400/20 to-pink-500/20 transform rotate-45 animate-geometric-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-16 w-8 h-8 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-lg animate-bounce-gentle"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 transform rotate-12 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96">
          <div className="absolute top-0 left-1/2 w-6 h-6 bg-blue-400/30 rounded-full animate-orbit-slow transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 right-0 w-4 h-4 bg-purple-400/30 rounded-full animate-orbit-medium transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-5 h-5 bg-pink-400/30 rounded-full animate-orbit-fast transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-3 h-3 bg-cyan-400/30 rounded-full animate-orbit-reverse transform -translate-y-1/2"></div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-shimmer">
            Full Stack Developer
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Crafting digital experiences with modern technologies. Passionate
            about creating scalable solutions that make a difference.
          </p>
<<<<<<< HEAD

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
=======
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <PeekingButton 
              variant="primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </PeekingButton>
            <PeekingButton 
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
>>>>>>> 69b1ebb188397bc239c326e479420144715d2e4c
            >
              Get In Touch
            </PeekingButton>
          </div>

          <div
            className="flex justify-center space-x-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              target="_blank"
              href="https://github.com/Anubhav2923"
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anubhav-singh-90b02828a/"
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
              style={{ animationDelay: "0.1s" }}
            >
              <Linkedin
                size={24}
                className="bg-white-700"
              />
            </a>
            <a
              target="_blank"
              href="mailto:anubhavsinghas9@gmail.com"
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
              style={{ animationDelay: "0.2s" }}
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
      </button>
    </section>
  );
};

export default Hero;
